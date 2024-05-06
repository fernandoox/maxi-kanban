import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { StatusTask } from '../../../interfaces/status-task.interface';

@Component({
  selector: 'app-task-columns',
  templateUrl: './task-columns.component.html',
  styleUrl: './task-columns.component.scss',
})
export class TaskColumnsComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  status: StatusTask = {
    title: 'TODO',
    color: '#37c3e6',
  };

  status2: StatusTask = {
    title: 'DOING',
    color: '#7B64EE',
  };
  //#37C3E6 #7B64EE #5ad7a7

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
