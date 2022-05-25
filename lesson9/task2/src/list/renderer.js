import { getItem } from './storage';
import './list.scss';

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  listElem.innerHTML = '';

  const taskList = getItem('tasksList');

  if (!taskList) {
    return;
  }

  const tasksElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const textElem = document.createElement('span');
      textElem.classList.add('text');
      textElem.textContent = text;

      const deleteBtnElem = document.createElement('button');
      deleteBtnElem.classList.add('delete__btn');
      deleteBtnElem.dataset.id = id;

      listItemElem.append(checkbox, text, deleteBtnElem);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
