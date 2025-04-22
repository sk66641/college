import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='text-center mt-12'>
      <h2 className='text-2xl font-bold'>To-Do List</h2>
      <div className='mt-4'>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='border border-gray-300 rounded px-2 py-1'
        />
        <button
          onClick={addTask}
          className='ml-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600'
        >
          Add Task
        </button>
      </div>

      <ul className='list-none p-0 mt-4'>
        {tasks.map((task, index) => (
          <li key={index} className='mt-2 flex justify-center items-center'>
            <span className='bg-gray-100 px-4 py-2 rounded shadow-md text-gray-800'>
              {task}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className='ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
