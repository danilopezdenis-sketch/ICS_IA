import { Form, useActionData, useNavigation, redirect } from 'react-router-dom';
import { addProject } from '../utils/api';

export async function action({ request }) {
  const data = Object.fromEntries(await request.formData());
  if (data.title.length < 5) return { error: "Mínimo 5 caracteres" };
  await addProject(data);
  return redirect('/projects');
}

export default function NewProjectPage() {
  const error = useActionData();
  const nav = useNavigation();
  return (
    <Form method="post" className="form-container">
      <h2>Nuevo Proyecto</h2>
      <input name="title" placeholder="Título" required />
      {error?.error && <p style={{color:'red'}}>{error.error}</p>}
      <textarea name="description" placeholder="Descripción" />
      <button type="submit" disabled={nav.state === 'submitting'}>
        {nav.state === 'submitting' ? 'Guardando...' : 'Crear'}
      </button>
    </Form>
  );
}