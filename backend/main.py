from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For better security, specify ['http://localhost:3000']
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data models
class TodoCreate(BaseModel):
    title: str

class TodoItem(TodoCreate):
    id: int
    completed: bool = False

# Placeholder for the data store
class TodoStore:
    def __init__(self):
        self._todos: List[TodoItem] = []
        self._current_id = 1

    def get_all(self) -> List[TodoItem]:
        return self._todos

    def add(self, todo_create: TodoCreate) -> TodoItem:
        # TODO: Add a new todo item to the list
        # Placeholder implementation
        raise NotImplementedError("add() method not implemented")

    def update(self, item_id: int, todo_update: TodoItem) -> TodoItem:
        # TODO: Update an existing todo item
        # Placeholder implementation
        raise NotImplementedError("update() method not implemented")

    def delete(self, item_id: int) -> None:
        # TODO: Delete a todo item by id
        # Placeholder implementation
        raise NotImplementedError("delete() method not implemented")

# Instantiate the data store
todo_store = TodoStore()

# Define the API endpoints
@app.get("/todos", response_model=List[TodoItem])
def get_todos():
    return todo_store.get_all()

@app.post("/todos", response_model=TodoItem)
def add_todo(todo_create: TodoCreate):
    return todo_store.add(todo_create)

@app.put("/todos/{item_id}", response_model=TodoItem)
def update_todo(item_id: int, todo_update: TodoItem):
    return todo_store.update(item_id, todo_update)

@app.delete("/todos/{item_id}")
def delete_todo(item_id: int):
    todo_store.delete(item_id)
    return {"message": "Item deleted"}
