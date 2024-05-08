import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SubTask } from '../../../interfaces/sub-task.interface';
import { Task } from '../../../interfaces/task.interface';
import { Theme } from '../../../interfaces/theme-interface';
import { StatusColumn } from '../../../types/status-column.type';
import { ViewTaskModalComponent } from '../../organisms/view-task-modal/view-task-modal.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Input() statusColumn?: StatusColumn;
  private theme?: string;
  constructor(
    public dialog: MatDialog,
    private store: Store<{ theme: Theme }>
  ) {
    this.store.select('theme', 'mode').subscribe((mode) => {
      this.theme = mode === 'DARK' ? 'theme-dark' : 'light-mode';
    });
  }

  openDialog(): void {
    this.dialog.open(ViewTaskModalComponent, {
      data: {
        task: this.task,
        statusColumn: this.statusColumn,
      },
      height: 'auto',
      width: '500px',
      autoFocus: false,
      panelClass: this.theme,
    });
  }

  doneSubTaks(subTasks: SubTask[]) {
    return subTasks.filter((sb) => sb.isFinished).length;
  }
}
