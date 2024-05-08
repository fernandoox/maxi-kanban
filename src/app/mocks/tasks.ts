import { v4 as uuidv4 } from 'uuid';
import { TaskState } from '../state/tasks/tasks-state.interface';

export const tasksMock: TaskState = {
  TODO: [
    {
      uuid: uuidv4(),
      title: 'Task 1',
      description:
        'Description for Task 1 Application bundle generation complete. [0.268 seconds], page reload sent to client(s).',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Subtask 1 for Task 1',
          isFinished: true,
        },
        {
          uuid: uuidv4(),
          description: 'Subtask 2 for Task 1',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Subtask 3 for Task 1',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Subtask 4 for Task 1',
          isFinished: false,
        },
      ],
    },
    {
      uuid: uuidv4(),
      title: 'Task 2',
      description: 'Description for Task 2',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Subtask 1 for Task 2',
          isFinished: true,
        },
      ],
    },
  ],
  DOING: [
    {
      uuid: uuidv4(),
      title: 'Task 3',
      description: 'Description for Task 3',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Subtask 1 for Task 3',
          isFinished: false,
        },
      ],
    },
  ],
  DONE: [
    {
      uuid: uuidv4(),
      title: 'Task 4',
      description: 'Description for Task 4',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Subtask 1 for Task 4',
          isFinished: true,
        },
      ],
    },
  ],
};
