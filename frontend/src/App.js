import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State variables
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // useEffect to fetch todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async () => {
    // TODO: Implement adding a new todo
    // Placeholder: Does nothing
  };

  // Toggle the completion status of a todo
  const toggleTodo = async (todo) => {
    // TODO: Implement toggling todo completion
    // Placeholder: Does nothing
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    // TODO: Implement deleting a todo
    // Placeholder: Does nothing
  };

  // Render the UI
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Add a new to-do"
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') addTodo();
          }}
          style={{ padding: '10px', width: '300px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleTodo(todo)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
