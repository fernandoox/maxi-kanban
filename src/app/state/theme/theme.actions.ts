import { createAction, props } from '@ngrx/store';
import { ThemeType } from '../../types/theme.type';

export const toggleTheme = createAction(
  '[Theme] Toggle Theme',
  props<{ mode: ThemeType }>()
);
