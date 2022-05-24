import { createTask } from './createTask.js';
import { updateTask, deleteTasksItem } from './updateTask.js';
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', createTask);
  const tasksListElem = document.querySelector('.list');
  tasksListElem.addEventListener('click', updateTask);
  tasksListElem.addEventListener('click', deleteTasksItem);
};