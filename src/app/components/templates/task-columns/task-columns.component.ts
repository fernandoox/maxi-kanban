import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { StatusTask } from '../../../interfaces/status-task.interface';
import { Task } from '../../../interfaces/task.interface';
import { TaskState } from '../../../state/tasks/tasks-state.interface';
import { changeOrder, transfer } from '../../../state/tasks/tasks.actions';
import {
  doingTasksSelector,
  doneTasksSelector,
  todoTasksSelector,
} from '../../../state/tasks/tasks.selector';
import { StatusColumn } from '../../../types/status-column.type';

@Component({
  selector: 'app-task-columns',
  templateUrl: './task-columns.component.html',
  styleUrl: './task-columns.component.scss',
})
export class TaskColumnsComponent {
  todoTitle: StatusTask = {
    title: 'TODO',
    color: '#37c3e6',
  };
  doingTitle: StatusTask = {
    title: 'DOING',
    color: '#7B64EE',
  };
  doneTitle: StatusTask = {
    title: 'DONE',
    color: '#5ad7a7',
  };

  todoTasks$!: Observable<Task[]>;
  doingTasks$!: Observable<Task[]>;
  doneTasks$!: Observable<Task[]>;
  constructor(private store: Store<{ tasks: TaskState }>) {
    this.todoTasks$ = this.store.select(todoTasksSelector);
    this.doingTasks$ = this.store.select(doingTasksSelector);
    this.doneTasks$ = this.store.select(doneTasksSelector);
  }

  drop(event: CdkDragDrop<Task[]>) {
    const { previousContainer, container, currentIndex, previousIndex } = event;

    if (previousContainer === container) {
      const statusColumn: StatusColumn = container.id as StatusColumn;
      this.store.dispatch(
        changeOrder({
          statusColumn,
          newIndex: currentIndex,
          currentIndex: previousIndex,
        })
      );
    } else {
      const task = event.item.data;
      const fromStatusColumn: StatusColumn =
        previousContainer.id as StatusColumn;
      const toStatusColumn: StatusColumn = container.id as StatusColumn;

      this.store.dispatch(
        transfer({
          task,
          fromStatusColumn,
          toStatusColumn,
          newIndex: currentIndex,
        })
      );
    }
  }
}
