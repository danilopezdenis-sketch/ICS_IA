import { useLoaderData, useSubmit, useFetcher, Link, redirect } from 'react-router-dom';
import { getProject, deleteProject, toggleTask, deleteTask } from '../utils/api';

export async function loader({ params }) { return getProject(params.projectId); }

export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get('intent');
  const taskId = formData.get('taskId');

  if (intent === 'delete-project') { await deleteProject(params.projectId); return redirect('/projects'); }
  if (intent === 'toggle-task') { await toggleTask(taskId); return null; }
  if (intent === 'delete-task') { await deleteTask(taskId); return null; }
  return null;
}

export default function ProjectDetailsPage() {
  const { project, tasks } = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  return (
    <div className="details-container">
      <h2>{project?.title}</h2>
      <button onClick={() => confirm('¿Borrar proyecto?') && submit({intent: 'delete-project'}, {method: 'post'})} className="btn-danger">Eliminar Proyecto</button>
      
      <h3>Tareas</h3>
      <Link to="new-task" className="btn-add">Añadir Tarea</Link>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className={t.completed ? 'completed' : ''}>
            <fetcher.Form method="post" style={{display:'inline'}}>
              <input type="hidden" name="taskId" value={t.id} />
              <input type="checkbox" name="intent" value="toggle-task" checked={t.completed} onChange={e => fetcher.submit(e.target.form)} />
              {t.title}
            </fetcher.Form>
            <button onClick={() => submit({intent: 'delete-task', taskId: t.id}, {method: 'post'})}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}