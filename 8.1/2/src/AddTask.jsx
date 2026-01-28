import { useState } from "react";
import { useTasks } from "./TasksContext";
import { useAuth } from "./AuthContext";

export const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTasks();
  const { currentUser } = useAuth();

  const handleAdd = () => {
    if (!text.trim() || currentUser.name === "Invitado") return;

    const newTask = {
      id: Date.now(), 
      text: text.trim(),
      author: currentUser.name,
      completed: false
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    setText("");
  };

  return (
    <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: "0.3rem" }}
      />
      <button onClick={handleAdd} disabled={currentUser.name === "Invitado"}>
        Añadir
      </button>
    </div>
  );
};
