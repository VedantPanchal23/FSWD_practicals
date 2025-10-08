import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = () => {
    if (title.trim() === '') {
      alert("Please enter a title for your task.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    
    setTitle('');
    setDescription('');
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      <div className="form-section">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="todo-input"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description (optional)"
          className="todo-textarea"
        />
        <button onClick={handleAddTodo} className="add-btn">
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="todo-content" onClick={() => handleToggleComplete(todo.id)}>
              <strong className="todo-title">{todo.title}</strong>
              <p className="todo-description">{todo.description}</p>
            </div>
            <button onClick={() => handleDeleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;