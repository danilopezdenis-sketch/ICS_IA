import { useState } from "react";
import { proyectos as proyectosIniciales} from "../datos/Datos";
import ProjectColumn from "./ProjectColumn";
import { TeamMemberList } from "./TeamMemberList";

function Dashboard(){
const [proyectos, setProyectos] = useState(proyectosIniciales);


const handleActualizarEstado = (proyectoId, nuevoEstado) => {

    const proyectosFiltrados = proyectos.map((proyecto) =>

        proyecto.id === proyectoId ?
        { ...proyecto, status: nuevoEstado }
        : proyecto

    );

    setProyectos(proyectosFiltrados);


};



const pendiente = proyectos.filter((p) =>p.status ==="pendiente");
const enProgreso = proyectos.filter((p) => p.status ==="en progreso");
const completado = proyectos.filter((p) => p.status ==="completado");
const responsablesUnicos = [...new Set(proyectos.map(p => p.assignedTo))];
const miembros = responsablesUnicos.map(nombre => ({ nombre }));


return (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Gestor de Proyectos</h1>
    
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-4">
            <ProjectColumn titulo="Pendiente" proyectos={pendiente} onActualizarEstado={handleActualizarEstado} />
          </div>
          <div className="col-md-4">
            <ProjectColumn titulo="En progreso" proyectos={enProgreso} onActualizarEstado={handleActualizarEstado} />
          </div>
          <div className="col-md-4">
            <ProjectColumn titulo="Completado" proyectos={completado} onActualizarEstado={handleActualizarEstado} />
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <TeamMemberList miembros={miembros} />
      </div>
    </div>
  </div>
)
}

export default Dashboard




