import { useLoaderData, Link } from 'react-router-dom';
import { getProjects } from '../utils/api.js';

export async function loader() { return getProjects(); }

export default function ProjectsPage() {
  const projects = useLoaderData();
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <Link to="new" className="btn-add">Nuevo Proyecto</Link>
      <ul>
        {projects.map(p => (
          <li key={p.id}><Link to={`/projects/${p.id}`}>{p.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}