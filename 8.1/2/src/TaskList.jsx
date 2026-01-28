import { useTasks } from "./TasksContext";
import { TaskItem } from "./TaskItem";
import { AddTask } from "./AddTask";

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div style={{ marginTop: "2rem", maxWidth: "500px" }}>
      <AddTask />
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
