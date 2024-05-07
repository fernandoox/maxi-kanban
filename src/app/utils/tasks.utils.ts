import { SubTask } from '../interfaces/sub-task.interface';
import { Task } from '../interfaces/task.interface';

// Utility function to update a subtask in an array of subtasks
export const updateSubTaskInArray = (
  subTasks: SubTask[],
  subTask: SubTask
): SubTask[] => {
  return subTasks.map((st) =>
    st.uuid === subTask.uuid ? { ...st, isFinished: subTask.isFinished } : st
  );
};

// Utility function to update a task in an array of tasks
export const updateTaskInArray = (tasks: Task[], updatedTask: Task): Task[] => {
  return tasks.map((t) => (t.uuid === updatedTask.uuid ? updatedTask : t));
};
