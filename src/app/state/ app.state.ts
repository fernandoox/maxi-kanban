import { ActionReducerMap } from '@ngrx/store';
import * as fromTasks from './tasks/tasks.reducer';
import * as fromTheme from './theme/theme.reducer';
export interface AppState {
  tasks: fromTasks.State;
  theme: fromTheme.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  tasks: fromTasks.tasksReducer,
  theme: fromTheme.themeReducer,
};
