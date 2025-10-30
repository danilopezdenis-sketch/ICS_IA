import React from "react";


export function UserList({ usuarios, onSeleccionarUsuario }) {

    return (
        <div>
            <h4>Lista de usuarios</h4>

            <ul className="list-group">
                {usuarios.map((usuario) => (
                    <li
                        key={usuario.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => onSeleccionarUsuario(usuario.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {usuario.nombre}
                    </li>
                ))}
            </ul>
        </div>
    )
}
