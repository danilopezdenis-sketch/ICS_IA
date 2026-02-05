
export function TeamMemberList({ miembros }) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white fw-bold text-center">
        Miembros del equipo
      </div>
      <ul className="list-group list-group-flush">
        {miembros.length > 0 ? (
          miembros.map((m, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center"
            >
              <div
                className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3"
                style={{ width: "35px", height: "35px" }}
              >
                {m.nombre.charAt(0).toUpperCase()}
              </div>

              <div>
                <strong>{m.nombre}</strong>
                <br />
                <small className="text-muted">{m.rol}</small>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center text-muted">
            Nadie asignado aún 
          </li>
        )}
      </ul>
    </div>
  );
}

