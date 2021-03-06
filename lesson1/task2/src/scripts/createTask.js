import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';
import { onCreateTask, getTasksList } from './tasksGetway.js';

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }

  const newTask = { 
    text, 
    done: false,
  };

  onCreateTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });

  inputElem.value = '';
};