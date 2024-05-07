import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskModalComponent } from '../../organisms/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss',
})
export class AddTaskButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddTaskModalComponent, {
      height: '600px',
      width: '500px',
    });
  }
}
