import { TaskState } from '../state/tasks/tasks-state.interface';

export const tasksMock: TaskState = {
  TODO: [
    {
      title: 'Task 1',
      description: 'Description for Task 1',
      subTasks: [
        {
          description: 'Subtask 1 for Task 1',
          isFinished: true,
        },
        {
          description: 'Subtask 2 for Task 1',
          isFinished: false,
        },
      ],
    },
    {
      title: 'Task 2',
      description: 'Description for Task 2',
      subTasks: [
        {
          description: 'Subtask 1 for Task 2',
          isFinished: true,
        },
      ],
    },
  ],
  DOING: [
    {
      title: 'Task 3',
      description: 'Description for Task 3',
      subTasks: [
        {
          description: 'Subtask 1 for Task 3',
          isFinished: false,
        },
      ],
    },
  ],
  DONE: [
    {
      title: 'Task 4',
      description: 'Description for Task 4',
      subTasks: [
        {
          description: 'Subtask 1 for Task 4',
          isFinished: true,
        },
      ],
    },
  ],
};
