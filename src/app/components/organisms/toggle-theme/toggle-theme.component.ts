import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Theme } from '../../../interfaces/theme-interface';
import { toggleTheme } from '../../../state/theme/theme.actions';
import { ThemeType } from '../../../types/theme.type';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
})
export class ToggleThemeComponent {
  themeClass$: Observable<ThemeType>;
  isLightTheme$: Observable<boolean>;

  constructor(private store: Store<{ theme: Theme }>) {
    this.themeClass$ = this.store.select('theme', 'mode');
    this.isLightTheme$ = this.themeClass$.pipe(map((mode) => mode === 'LIGHT'));
  }

  toggleTheme(checked: boolean) {
    const newMode: ThemeType = checked ? 'LIGHT' : 'DARK';
    this.store.dispatch(toggleTheme({ mode: newMode }));
  }
}
