import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Theme } from './interfaces/theme-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kanban';

  private isDark = false;
  constructor(private store: Store<{ theme: Theme }>) {
    this.store.select('theme', 'mode').subscribe((mode) => {
      this.isDark = mode === 'DARK';
    });
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }
}
