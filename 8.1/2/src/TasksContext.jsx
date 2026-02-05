import { createContext, useReducer, useContext } from "react";

const TasksContext = createContext();

const initialTasks = [
  { id: 1, text: "Hacer la compra", author: "Ana", completed: false },
  { id: 2, text: "Estudiar React", author: "Luis", completed: false },
  { id: 3, text: "Preparar informe", author: "Ana", completed: true }
];

function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
