import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { restoreTasks } from '../../../state/tasks/tasks.actions';

@Component({
  selector: 'app-restore-tasks-button',
  templateUrl: './restore-tasks-button.component.html',
  styleUrl: './restore-tasks-button.component.scss',
})
export class RestoreTasksButtonComponent {
  constructor(private store: Store) {}

  restoreTasks() {
    this.store.dispatch(restoreTasks());
  }
}
