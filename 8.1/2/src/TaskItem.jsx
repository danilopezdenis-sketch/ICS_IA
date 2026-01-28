import { useAuth } from "./AuthContext";
import { useTasks } from "./TasksContext";
import React from "react";

export const TaskItem = React.memo(({ task }) => {
  const { currentUser } = useAuth();
  const { dispatch } = useTasks();

  const canEdit = currentUser.name !== "Invitado" && task.author === currentUser.name;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem",
      borderBottom: "1px solid #e5e7eb",
      opacity: canEdit ? 1 : 0.5
    }}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text} <small>({task.author})</small>
      </span>
      <div style={{ display: "flex", gap: "0.3rem" }}>
        <button onClick={() => canEdit && dispatch({ type: "TOGGLE_TASK", payload: task.id })} disabled={!canEdit}>
          ✓
        </button>
        <button onClick={() => canEdit && dispatch({ type: "REMOVE_TASK", payload: task.id })} disabled={!canEdit}>
          X
        </button>
      </div>
    </div>
  );
});
