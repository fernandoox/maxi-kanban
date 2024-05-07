import { SubTask } from './sub-task.interface';

export interface Task {
  title: string;
  description: string;
  subTasks: SubTask[];
}
