import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;

    addTask(trimmedText, priority);
    setText("");
    setPriority("Low");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;