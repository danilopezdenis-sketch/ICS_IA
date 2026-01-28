import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center',
      fontFamily: 'system-ui'
    }}>
      <h1>¡Ups! Algo salió mal</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      
      <p style={{ color: 'red', fontStyle: 'italic' }}>
        {error.statusText || error.message}
      </p>

      <Link 
        to="/" 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}
        onClick={() => window.location.href = "/"}
      >
        Intentar de nuevo
      </Link>
    </div>
  );
}