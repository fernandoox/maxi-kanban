import { Action, createAction, props } from '@ngrx/store';
import { Task } from '../../interfaces/task.interface';

export const add = createAction('[TASK] Add', props<{ task: Task }>());
