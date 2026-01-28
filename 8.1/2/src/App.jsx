import { AuthProvider } from "./AuthContext.jsx";
import { TasksProvider } from "./TasksContext.jsx";
import { UserInfo } from "./UserInfo.jsx";
import { UserSelect } from "./UserSelect.jsx";
import { TaskList } from "./TaskList.jsx";

export default function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <UserInfo />
        <div style={{ padding: "2rem" }}>
          <h1>Dashboard de Tareas</h1>
          <UserSelect />
          <TaskList />
        </div>
      </TasksProvider>
    </AuthProvider>
  );
}
