import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnsComponent } from './task-columns.component';

describe('TaskColumnsComponent', () => {
  let component: TaskColumnsComponent;
  let fixture: ComponentFixture<TaskColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskColumnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
