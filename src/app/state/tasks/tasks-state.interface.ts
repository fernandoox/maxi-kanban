import { Task } from '../../interfaces/task.interface';

export interface TaskState {
  TODO: Task[];
  DOING: Task[];
  DONE: Task[];
}
