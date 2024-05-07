import { createReducer, on } from '@ngrx/store';
import { tasksMock } from '../../mocks/tasks';
import {
  updateSubTaskInArray,
  updateTaskInArray,
} from '../../utils/tasks.utils';
import { TaskState } from './tasks-state.interface';
import { add, changeOrder, toggleSubTask, transfer } from './tasks.actions';

const initialState: TaskState = tasksMock;

export const tasksReducer = createReducer(
  initialState,
  on(add, (state, { task, statusColumn }) => {
    const newState = { ...state };
    newState[statusColumn] = [...state[statusColumn], task];
    return newState;
  }),
  on(changeOrder, (state, { statusColumn, newIndex, currentIndex }) => {
    const newState = { ...state };
    // Find the index of the task in its current status column
    if (currentIndex !== -1) {
      newState[statusColumn] = [...newState[statusColumn]];
      // Remove the task from its current position
      const removedTask = newState[statusColumn].splice(currentIndex, 1)[0];
      // Insert the task in the new position
      newState[statusColumn].splice(newIndex, 0, removedTask);
    }
    return newState;
  }),
  on(
    transfer,
    (state, { task, fromStatusColumn, toStatusColumn, newIndex }) => {
      const newState = { ...state };
      const taskIndex = newState[fromStatusColumn].findIndex((t) => t === task);
      if (taskIndex !== -1) {
        // Create a copy of the original array of tasks
        const originTasks = [...newState[fromStatusColumn]];
        // Remove the task from its current position
        originTasks.splice(taskIndex, 1);
        // Update the source column with the modified copy
        newState[fromStatusColumn] = originTasks;

        // Create a copy of the destination column array
        const destinationTasks = [...newState[toStatusColumn]];
        // Insert the task at the new position in the destination column
        destinationTasks.splice(newIndex, 0, task);
        // Update the destination column with the modified copy
        newState[toStatusColumn] = destinationTasks;
      }
      return newState;
    }
  ),
  on(toggleSubTask, (state, { statusColumn, task, subTask, isFinished }) => {
    const updatedTasks = updateTaskInArray(state[statusColumn], {
      ...task,
      subTasks: updateSubTaskInArray(task.subTasks, { ...subTask, isFinished }),
    });
    return { ...state, [statusColumn]: updatedTasks };
  })
);
