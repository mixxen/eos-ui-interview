const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// A simple in-memory TodoStore
class TodoStore {
  constructor() {
    this._todos = [];
    this._currentId = 1;
  }

  getAll() {
    return this._todos;
  }

  add(todoCreate) {
    // implement
  }

  update(itemId, todoUpdate) {
    // implement
}

  delete(itemId) {
    // implement
  }
}

const todoStore = new TodoStore();

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todoStore.getAll());
});

// POST a new todo
app.post('/todos', (req, res) => {
  // Expecting a JSON body with { "title": "some title" }
  const todoCreate = req.body;
  const newTodo = todoStore.add(todoCreate);
  res.json(newTodo);
});

// PUT to update an existing todo
// Expects a full replacement of the object, including { id, title, completed }
app.put('/todos/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);
  const todoUpdate = req.body;
  
  try {
    const updatedTodo = todoStore.update(itemId, todoUpdate);
    res.json(updatedTodo);
  } catch (error) {
    res.status(404).json({ detail: error.message });
  }
});

// DELETE a todo
app.delete('/todos/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);

  try {
    todoStore.delete(itemId);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(404).json({ detail: error.message });
  }
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
