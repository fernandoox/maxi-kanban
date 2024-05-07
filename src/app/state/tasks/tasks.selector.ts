import { TaskState } from './tasks-state.interface';

export const todoTasksSelector = (state: { tasks: TaskState }) =>
  state.tasks.TODO;

export const doingTasksSelector = (state: { tasks: TaskState }) =>
  state.tasks.DOING;

export const doneTasksSelector = (state: { tasks: TaskState }) =>
  state.tasks.DONE;
