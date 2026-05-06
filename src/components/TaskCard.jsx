import { useState } from "react";

function TaskCard({
  task,
  deleteTask,
  moveTask,
  editTask,
}) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const saveEdit = () => {
    editTask(task.id, newText);
    setEditing(false);
  };

  return (
    <div className={`task ${task.priority.toLowerCase()}`}>
      {editing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />

          <button type="button" onClick={saveEdit} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm">
            Save
          </button>
        </>
      ) : (
        <p onClick={() => setEditing(true)} className="mb-2 font-medium">
          {task.text}
        </p>
      )}

      <small className="text-gray-600 text-sm">{task.priority}</small>

      <div className="buttons">
        {task.status !== "To Do" && (
          <button
            type="button"
            onClick={() => moveTask(task.id, "To Do")}
            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xs"
          >
            To Do
          </button>
        )}

        {task.status !== "In Progress" && (
          <button
            type="button"
            onClick={() => moveTask(task.id, "In Progress")}
            className="bg-blue-200 hover:bg-blue-300 px-2 py-1 rounded text-xs"
          >
            Progress
          </button>
        )}

        {task.status !== "Done" && (
          <button
            type="button"
            onClick={() => moveTask(task.id, "Done")}
            className="bg-green-200 hover:bg-green-300 px-2 py-1 rounded text-xs"
          >
            Done
          </button>
        )}

        <button type="button" onClick={() => deleteTask(task.id)} className="bg-red-200 hover:bg-red-300 px-2 py-1 rounded text-xs">
          X
        </button>
      </div>
    </div>
  );
}

export default TaskCard;