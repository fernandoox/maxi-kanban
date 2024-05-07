import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { add } from '../../../state/tasks/tasks.actions';
import { StatusColumn } from '../../../types/status-column.type';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.scss',
})
export class AddTaskModalComponent {
  taskForm: FormGroup;
  statusColumns: StatusColumn[] = ['TODO', 'DOING', 'DONE'];

  constructor(
    public dialogRef: MatDialogRef<AddTaskModalComponent>,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.taskForm = this.createTaskForm();
  }

  createTaskForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required],
      subTasks: this.fb.array([this.createSubTaskFormGroup()]),
    });
  }

  createSubTaskFormGroup(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      isFinished: [false],
    });
  }

  get subTasks(): FormArray {
    return this.taskForm.get('subTasks') as FormArray;
  }

  addSubTask(): void {
    this.subTasks.push(this.createSubTaskFormGroup());
  }

  removeSubTask(index: number): void {
    this.subTasks.removeAt(index);
  }

  submitForm() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      this.store.dispatch(
        add({ task: formData, statusColumn: formData.status })
      );
      this.dialogRef.close();
    }
  }
}
