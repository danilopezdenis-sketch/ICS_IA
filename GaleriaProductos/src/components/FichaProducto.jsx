
import ImagenProducto from './ImagenProducto';

function FichaProducto({ producto }) {
  return (
    <div className="ficha-producto">
      <ImagenProducto url={producto.imagenURL} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio} €</p>
    </div>
  );
}

export default FichaProducto;









