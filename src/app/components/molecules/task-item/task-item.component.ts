import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../../interfaces/task.interface';
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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ViewTaskModalComponent, {
      data: {
        task: this.task,
        statusColumn: this.statusColumn,
      },
      height: 'auto',
      width: '500px',
      autoFocus: false,
    });
  }
}
