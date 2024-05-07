import { createReducer, on } from '@ngrx/store';
import { tasksMock } from '../../mocks/tasks';
import { TaskState } from './tasks-state.interface';
import { add, changeOrder, transfer } from './tasks.actions';

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
        const originTasks = [...newState[fromStatusColumn]]; // Creamos una copia del array original
        originTasks.splice(taskIndex, 1); // Modificamos la copia en lugar del array original
        newState[fromStatusColumn] = originTasks; // Asignamos la copia modificada al estado

        const destinationTasks = [...newState[toStatusColumn]]; // Creamos una copia del array de destino
        destinationTasks.splice(newIndex, 0, task); // Modificamos la copia del array de destino
        newState[toStatusColumn] = destinationTasks; // Asignamos la copia modificada al estado
      }
      return newState;
    }
  )
);
