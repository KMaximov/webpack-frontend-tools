const baseUrl = 'https://627a4e1373bad50685866f2c.mockapi.io/TodoList/';

export const getTasksList = () => fetch(`${baseUrl}`).then((response) => response.json()); // отримали масив задач які зберігаються на сервері

export const onCreateTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updatedTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
