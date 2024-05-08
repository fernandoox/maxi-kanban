import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { tasksMock } from '../../../mocks/tasks';
import { restoreTasks } from '../../../state/tasks/tasks.actions';
import { RestoreTasksButtonComponent } from './restore-tasks-button.component';
describe('RestoreTasksButtonComponent', () => {
  let component: RestoreTasksButtonComponent;
  let fixture: ComponentFixture<RestoreTasksButtonComponent>;
  let store: MockStore;
  const initialState = tasksMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestoreTasksButtonComponent],
      imports: [MatIconModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(RestoreTasksButtonComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch restoreTasks action when restoreTasks() is called', () => {
    const spy = spyOn(store, 'dispatch');
    component.restoreTasks();
    expect(spy).toHaveBeenCalledWith(restoreTasks());
  });
});
