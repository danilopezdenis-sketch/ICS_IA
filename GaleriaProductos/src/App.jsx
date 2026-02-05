import { productos } from './datos/Productos';
import FichaProducto from './components/FichaProducto';
import GaleriaProdcuctos from './components/GaleriaProductos';
 

function App() {
  return (
  <div className="App">
    <h1>Catálogo Productos</h1>
    <GaleriaProdcuctos productos={productos} />
  </div>
  );
}

export default App;
