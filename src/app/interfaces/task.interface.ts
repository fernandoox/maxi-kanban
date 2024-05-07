import { SubTask } from './sub-task.interface';

export interface Task {
  uuid: string;
  title: string;
  description: string;
  subTasks: SubTask[];
}
