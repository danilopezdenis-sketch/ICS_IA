import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">Naturaleza Viva</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Proyectos</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Recursos</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Artículos</a></li>
                  <li><a className="dropdown-item" href="#">Videos</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CARDS */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {Array(4).fill(0).map((_, i) => (
            <div className="col" key={i}>
              <div className="card h-100">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Planta" />
                <div className="card-body">
                  <h5 className="card-title text-success">Explora la Naturaleza</h5>
                  <p className="card-text">Descubre cómo cuidar el medio ambiente y conectar con la vida natural.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO */}
     <section className="py-5" style={{ backgroundColor: "#e8f5e9" }}>
  <div className="container">
    <h2 className="text-success mb-4">Solicita más información</h2>

   <form name="contacto" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contacto" />

  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre completo</label>
    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Tu nombre" />
  </div>
  <div className="mb-3">
    <label htmlFor="correo" className="form-label">Correo electrónico</label>
    <input type="email" className="form-control" id="correo" name="correo" placeholder="nombre@ejemplo.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="mensaje" className="form-label">Mensaje</label>
    <textarea className="form-control" id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu consulta aquí..."></textarea>
  </div>
  <button type="submit" className="btn btn-success">Enviar solicitud</button>
</form>

  </div>
</section>



      {/* FOOTER */}
      <footer className="bg-success text-white text-center py-4 mt-5">
        <div className="container">
          <p>© 2025 Naturaleza Viva. Todos los derechos reservados.</p>
          <p><small>Inspirando respeto por la Tierra | <a href="#" className="text-white text-decoration-underline">Política de privacidad</a></small></p>
        </div>
      </footer>
    </>
  )
}

export default App
