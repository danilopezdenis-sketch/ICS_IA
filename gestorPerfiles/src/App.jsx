import { useState } from 'react'  
import {UserList} from '../components/UserList.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import usuarios from '../datos/usuarios.js';




function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);

  const manejarSeleccion = (id) => {

    setUsuarioSeleccionadoId(id);
  };

  const usuarioSeleccionado = usuarios.find(u => u.id === usuarioSeleccionadoId)
    || null;


  return (
<div className="container mt-4">
  <h1 className="text-center mb-4">Visor de perfiles de usuarios</h1>

  <div className="row">

    <div className="col-md-4">
      <UserList 
        usuarios={usuarios} 
        onSeleccionarUsuario={manejarSeleccion} 
      />
    </div>


    <div className="col-md-8">
      {usuarioSeleccionado ? (
        <ProfileCard usuario={usuarioSeleccionado} />
      ) : (
        <div className="alert alert-info text-center">
          Selecciona un usuario para ver los detalles.
        </div>
      )}
    </div>
  </div>
</div>


  )
  
  

}

export default App
