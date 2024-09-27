// src/ToDoApp.js
import React, { useState } from 'react';
import './ToDoApp.css';

const ToDoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const handleToggleTaskCompletion = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="app-title">🌸 Very Cutesy To-Do List 🌸</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
        className="input"
      />
      <button onClick={handleAddTask} className="button">Add Task</button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {task.text}
            <div>
              <button onClick={() => handleToggleTaskCompletion(index)} className="done-button">
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => handleDeleteTask(index)} className="delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;

