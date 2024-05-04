import { createReducer, on } from '@ngrx/store';
import { Task } from '../../interfaces/task.interface';
import { add } from './tasks.actions';

const initialState: Task = {
  name: 'First Task',
  state: 'Pending',
};

export const tasksReducer = createReducer(
  initialState,
  on(add, (state, payload) => ({
    ...state,
    ...payload.task,
  }))
);
