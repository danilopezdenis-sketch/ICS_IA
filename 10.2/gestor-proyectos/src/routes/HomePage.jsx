import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Gestor de Proyectos Interactivo</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Bienvenido a tu plataforma de organización. Aquí puedes gestionar tus proyectos 
        y tareas de forma dinámica utilizando las últimas capacidades de React Router.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link to="/projects" className="btn-add" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Ir a mis Proyectos
        </Link>
      </div>

      <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <div className="card">
          <h3>Proyectos</h3>
          <p>Crea y organiza tus metas principales.</p>
        </div>
        <div className="card">
          <h3>Tareas</h3>
          <p>Añade subtareas y controla su progreso.</p>
        </div>
        <div className="card">
          <h3>Interactividad</h3>
          <p>Actualizaciones en tiempo real con Loaders y Actions.</p>
        </div>
      </div>
    </div>
  );
}