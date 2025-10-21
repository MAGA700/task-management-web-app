import React from "react";
import "./../styles/tasks.css";

function TaskCard({ task, provided, snapshot }) {
  return (
    <div
      className={`task-card ${task.priority?.toLowerCase() || ""}`}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...provided.draggableProps.style,
        background: snapshot.isDragging ? "#f0f0f0" : "white",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <span>Приоритет: {task.priority}</span>
    </div>
  );
}

export default TaskCard;
