import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavListItemComponent } from './components/atoms/nav-list-item/nav-list-item.component';
import { ThemeIconComponent } from './components/atoms/theme-icon/theme-icon.component';
import { ToolbarTitleComponent } from './components/atoms/toolbar-title/toolbar-title.component';
import { NavListComponent } from './components/molecules/nav-list/nav-list.component';
import { ToggleThemeComponent } from './components/organisms/toggle-theme/toggle-theme.component';
import { NavigationComponent } from './components/templates/navigation/navigation.component';
import { tasksReducer } from './state/tasks/tasks.reducer';
import { AddTaskButtonComponent } from './components/atoms/add-task-button/add-task-button.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarTitleComponent,
    NavigationComponent,
    NavListItemComponent,
    NavListComponent,
    ToggleThemeComponent,
    ThemeIconComponent,
    AddTaskButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
