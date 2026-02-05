let projects = [
  { id: '1', title: 'Proyecto 1', description: 'Descripción del primer proyecto de prueba.' }
];

let tasks = [
  { id: 't1', projectId: '1', title: 'Configurar el entorno', completed: true },
  { id: 't2', projectId: '1', title: 'Implementar loaders', completed: false }
];

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function getProjects() {
  await sleep(400);
  return [...projects];
}

export async function getProject(id) {
  await sleep(400);
  const project = projects.find(p => p.id === id);
  const projectTasks = tasks.filter(t => t.projectId === id);
  return { project, tasks: projectTasks };
}

export async function addProject(data) {
  await sleep(500);
  const newProject = { 
    ...data, 
    id: Math.random().toString(36).substr(2, 9) 
  };
  projects.push(newProject);
  return newProject;
}

export async function deleteProject(id) {
  await sleep(400);
  projects = projects.filter(p => p.id !== id);
  tasks = tasks.filter(t => t.projectId !== id);
}

export async function addTask(projectId, data) {
  await sleep(400);
  const newTask = { 
    ...data, 
    id: Math.random().toString(36).substr(2, 9), 
    projectId, 
    completed: false 
  };
  tasks.push(newTask);
  return newTask;
}

export async function toggleTask(id) {
  await sleep(200);
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
}

export async function deleteTask(id) {
  await sleep(200);
  tasks = tasks.filter(t => t.id !== id);
}