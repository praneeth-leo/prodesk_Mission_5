import TaskCard from "./TaskCard";

function Column({
  title,
  tasks,
  deleteTask,
  moveTask,
  editTask,
}) {
  return (
    <div className="column">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

      {tasks
        .filter((task) => task.status === title)
        .map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            moveTask={moveTask}
            editTask={editTask}
          />
        ))}
    </div>
  );
}

export default Column;