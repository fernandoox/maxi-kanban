import { createAction, props } from '@ngrx/store';
import { SubTask } from '../../interfaces/sub-task.interface';
import { Task } from '../../interfaces/task.interface';
import { StatusColumn } from '../../types/status-column.type';

export const add = createAction(
  '[TASK] Add',
  props<{ task: Task; statusColumn: StatusColumn }>()
);

export const changeOrder = createAction(
  '[TASK] Change order',
  props<{
    statusColumn: StatusColumn;
    newIndex: number;
    currentIndex: number;
  }>()
);

export const transfer = createAction(
  '[TASK] Transfer',
  props<{
    task: Task;
    fromStatusColumn: StatusColumn;
    toStatusColumn: StatusColumn;
    newIndex: number;
  }>()
);

export const toggleSubTask = createAction(
  '[TASK] Update Subtask',
  props<{
    statusColumn: StatusColumn;
    task: Task;
    subTask: SubTask;
    isFinished: boolean;
  }>()
);
