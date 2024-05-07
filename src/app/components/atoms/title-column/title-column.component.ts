import { Component, Input } from '@angular/core';
import { StatusTask } from '../../../interfaces/status-task.interface';

@Component({
  selector: 'app-title-column',
  templateUrl: './title-column.component.html',
  styleUrl: './title-column.component.scss',
})
export class TitleColumnComponent {
  @Input() status?: StatusTask;
  @Input() numberOfTasks = 0;
}
