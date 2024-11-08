# To-Do List Application

A simple To-Do List application with a FastAPI backend and a React frontend.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Application Architecture](#application-architecture)
- [Tasks for Coding Test](#tasks-for-coding-test)

## Project Structure

```
project_root/
├── README.md
├── frontend/
│   └── (React app code)
└── backend/
    ├── main.py
    └── requirements.txt
```

## Prerequisites

- **Node.js** (v14 or higher)
- **Python** (3.7 or higher)
- **pip** (Python package installer)

## Backend Setup

### 1. Navigate to the Backend Directory

```bash
cd backend
```

### 2. Create a Virtual Environment (Optional but Recommended)

#### On macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

#### On Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Backend Server

```bash
uvicorn main:app --reload
```

The backend server will start on `http://localhost:8000`.

## Frontend Setup

### 1. Navigate to the Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Frontend Application

```bash
npm start
```

The frontend application will start on `http://localhost:3000`.

## Running the Application

1. **Start the Backend Server**: Follow the steps in the [Backend Setup](#backend-setup) section.
2. **Start the Frontend Application**: Follow the steps in the [Frontend Setup](#frontend-setup) section.
3. **Access the Application**: Open your web browser and navigate to `http://localhost:3000`.

## Application Architecture

Below is an ASCII block diagram illustrating the functions and communications between the frontend and backend:

```
+-------------------+          HTTP Requests         +---------------------+
|                   |  GET /todos       ---------->  |                     |
|                   |                                |                     |
|                   |  POST /todos      ---------->  |                     |
|                   |                                |                     |
|   React Frontend  |  PUT /todos/{id}  ---------->  |   FastAPI Backend   |
|                   |                                |                     |
|                   |  DELETE /todos/{id}  ------->  |                     |
|                   |                                |                     |
|                   |  <----------  JSON Responses   |                     |
+-------------------+                                +---------------------+
```

### Components:

- **Frontend (React):**
  - Displays the to-do list.
  - Provides input for adding new to-do items.
  - Sends HTTP requests to the backend API.

- **Backend (FastAPI):**
  - Handles HTTP requests from the frontend.
  - Manages the to-do items in memory.
  - Sends JSON responses back to the frontend.

### Endpoints:

- **GET `/todos`**
  - Fetches all to-do items.

- **POST `/todos`**
  - Adds a new to-do item.

- **PUT `/todos/{id}`**
  - Updates an existing to-do item.

- **DELETE `/todos/{id}`**
  - Deletes a to-do item.

## Tasks for Coding Test

### Primary Task

1. **Complete the Code Where Placeholders Are Provided**:
   - `main.py`: Implement the methods in the `TodoStore` class to manage the to-do items.
   - `App.js`: Implement the functions to fetch, add, toggle, and delete to-do items, so the frontend communicates with the backend correctly.
   - **Hint**: Look for `TODO` comments in the code for the specific sections that need implementation.

### Bonus Tasks

If you complete the primary task, feel free to work on any of the following bonus tasks to further improve the application:

- **Create Dockerfiles and Docker Compose**:
  - Set up Dockerfiles for the frontend and backend, and create a `docker-compose.yml` file to manage both services.

- **Upgrade the Aesthetics**:
  - Enhance the visual styling of the app to improve user experience. Consider using CSS styles for better layouts, hover effects, and transitions.

- **Upgrade to Use MUI Components**:
  - Replace basic HTML elements with Material-UI (MUI) components, such as buttons, input fields, and checkboxes, to give the app a more professional appearance.

- **Add New Features**:
  - Implement an **Edit** feature to allow users to modify an existing to-do item.
  - Add a **Due Date** feature to allow users to specify a due date for each to-do item and display it on the UI.

- **Add Unit Tests**:
  - Ensure each feature is functioning correctly and that the application behaves as expected in a browser environment.

---

Good luck, and feel free to ask if you have any questions!
