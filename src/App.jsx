import { useEffect, useState } from "react";
import Column from "./components/Column.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      status: "To Do",
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Kanban Task Board</h1>

      <TaskForm addTask={addTask} />

      <div className="board">
        <Column
          title="To Do"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
        />

        <Column
          title="In Progress"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
        />

        <Column
          title="Done"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;