
import ProjectCard from "./ProjectCard";

function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {

    const getHeaderColor = () => {
    switch (titulo.toLowerCase()) {
      case "pendiente":
        return "bg-warning text-dark";
      case "en progreso":
        return "bg-info text-white";
      case "completado":
        return "bg-success text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className={`card-header fw-bold text-center ${getHeaderColor()}`}>
        {titulo}
      </div>

      <ul className="list-group list-group-flush">
        {proyectos.length > 0 ? (
          proyectos.map((proyecto) => (
            <li key={proyecto.id} className="list-group-item">
              <ProjectCard
                proyecto={proyecto}
                onActualizarEstado={onActualizarEstado}
              />
            </li>
          ))
        ) : (
          <li className="list-group-item text-center text-muted">
            No hay proyectos 
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProjectColumn;


