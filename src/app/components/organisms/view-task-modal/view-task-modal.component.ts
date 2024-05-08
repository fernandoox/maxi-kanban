import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SubTask } from '../../../interfaces/sub-task.interface';
import { Task } from '../../../interfaces/task.interface';
import { TaskState } from '../../../state/tasks/tasks-state.interface';
import { toggleSubTask } from '../../../state/tasks/tasks.actions';
import { StatusColumn } from '../../../types/status-column.type';
interface Data {
  task: Task;
  statusColumn: StatusColumn;
}
@Component({
  selector: 'app-view-task-modal',
  templateUrl: './view-task-modal.component.html',
  styleUrl: './view-task-modal.component.scss',
})
export class ViewTaskModalComponent implements OnDestroy {
  subTasks?: SubTask[];
  private storeSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ViewTaskModalComponent>,
    private store: Store<{ tasks: TaskState }>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {
    this.storeSubscription = this.store
      .select('tasks')
      .subscribe((dataStore) => {
        this.subTasks = dataStore[this.data.statusColumn].find(
          (t) => t.uuid === this.data.task.uuid
        )?.subTasks;
      });
  }

  ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubTaskStatusChange(event: boolean, subTask: SubTask): void {
    const isFinished = event;
    const { statusColumn, task } = this.data;
    this.store.dispatch(
      toggleSubTask({ statusColumn, task, subTask, isFinished })
    );
  }

  doneSubTaks(subTasks: SubTask[]) {
    return subTasks.filter((sb) => sb.isFinished).length;
  }
}
