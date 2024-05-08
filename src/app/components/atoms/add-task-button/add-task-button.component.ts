import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Theme } from '../../../interfaces/theme-interface';
import { AddTaskModalComponent } from '../../organisms/add-task-modal/add-task-modal.component';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrl: './add-task-button.component.scss',
})
export class AddTaskButtonComponent {
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
    this.dialog.open(AddTaskModalComponent, {
      height: '600px',
      width: '500px',
      panelClass: this.theme,
    });
  }
}
