import { createReducer, on } from '@ngrx/store';
import { Theme } from '../../interfaces/theme-interface';
import { toggleTheme } from './theme.actions';
export type State = Theme;

const initialState: State = {
  mode: 'LIGHT',
};

export const themeReducer = createReducer(
  initialState,
  on(toggleTheme, (state, { mode }) => {
    return { ...state, mode };
  })
);
