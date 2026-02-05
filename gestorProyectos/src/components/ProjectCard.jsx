import { useState } from "react";

function ProjectCard({ proyecto, onActualizarEstado}) {

    const [nuevoEstado, setNuevoEstado] = useState(proyecto.status);

    const handleChange = (e) => {

        const estadoSeleccionado = e.target.value;
        setNuevoEstado(estadoSeleccionado);
        onActualizarEstado(proyecto.id, estadoSeleccionado);
    };


    
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "alta":
        return "bg-danger";
      case "media":
        return "bg-warning";
      case "baja":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };



return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <div
            className={`rounded-circle me-2 ${getPriorityColor(
              proyecto.priority
            )}`}
            style={{ width: "12px", height: "12px" }}
          ></div>
          <h5 className="card-title mb-0">{proyecto.title}</h5>
        </div>

        <p className="card-text text-muted small">{proyecto.description}</p>
        <p className="card-text">
          <strong>Responsable:</strong> {proyecto.assignedTo}
        </p>
        <p className="card-text">
          <small className="text-muted">
            Fecha límite: {proyecto.dueDate}
          </small>
        </p>

        <div className="mt-2">
          <label className="form-label fw-semibold">Mover a:</label>
          <select
            className="form-select form-select-sm"
            value={nuevoEstado}
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En progreso</option>
            <option value="completado">Completado</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;




