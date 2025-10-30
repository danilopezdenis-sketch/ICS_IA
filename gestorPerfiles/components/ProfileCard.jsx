import React from "react";

function ProfileCard({ usuario }) {
    if (!usuario) {
        return <div>No se ha seleccionado ningún usuario</div>;
    }

    return (
        <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>

            <div className="card-body text-center p-4">
                <img
                    src={usuario.avatarUrl}
                    alt={`Avatar de ${usuario.nombre}`}
                    className="rounded-circle mb-3"
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover'
                    }}
                />
                <h4 className="card-title mb-1">{usuario.nombre}</h4>
                <p className="text-muted mb-3">{usuario.email}</p>
            </div>

            <div className="card-body border-top p-4">
                <h5 className="mb-3">Información de Contacto</h5>

                <div className="mb-2">
                    <strong>Calle: </strong>
                    {usuario.direccion.calle}
                </div>
                <div className="mb-3">
                    <strong>Ciudad: </strong>
                    {usuario.direccion.ciudad}
                </div>
            </div>

            <div className="card-body border-top p-4">
                <h5 className="mb-3">Aficiones</h5>
                <div className="d-flex flex-wrap gap-2">
                    {usuario.aficiones.map((aficion, index) => (
                        <span
                            key={index}
                            className="badge bg-light text-dark border px-3 py-2"
                            style={{ fontSize: '0.9rem' }}
                        >
                            {aficion}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;






