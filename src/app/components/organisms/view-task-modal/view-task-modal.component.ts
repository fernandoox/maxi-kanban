import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SubTask } from '../../../interfaces/sub-task.interface';
import { Task } from '../../../interfaces/task.interface';
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
export class ViewTaskModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewTaskModalComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubTaskStatusChange(event: Event, subTask: SubTask): void {
    const isFinished = (<HTMLInputElement>event.target).checked;
    console.log(this.data, subTask, isFinished);
    const { statusColumn, task } = this.data;
    this.store.dispatch(
      toggleSubTask({ statusColumn, task, subTask, isFinished })
    );
  }

  doneSubTaks(subTasks: SubTask[]) {
    return subTasks.filter((sb) => sb.isFinished).length;
  }
}
