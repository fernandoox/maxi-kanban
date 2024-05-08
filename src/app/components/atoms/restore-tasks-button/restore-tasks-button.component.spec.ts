import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreTasksButtonComponent } from './restore-tasks-button.component';

describe('RestoreTasksButtonComponent', () => {
  let component: RestoreTasksButtonComponent;
  let fixture: ComponentFixture<RestoreTasksButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestoreTasksButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestoreTasksButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
