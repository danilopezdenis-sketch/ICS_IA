import { Form, redirect } from 'react-router-dom';
import { addTask } from '../utils/api';

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());
  if (!data.title) return null;
  await addTask(params.projectId, data);
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  return (
    <Form method="post" className="form-container">
      <h3>Añadir Tarea</h3>
      <input name="title" placeholder="Nombre de la tarea" required />
      <button type="submit">Añadir</button>
    </Form>
  );
}