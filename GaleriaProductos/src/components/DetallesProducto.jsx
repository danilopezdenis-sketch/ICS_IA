import React from "react";


function DetallesProducto({caracteristicas, descripcion, children}){

return <div className="detalles-producto">

    <ul>

    {caracteristicas.map((caracteristicas, index) =>
    
    <li key={index}>{caracteristicas}</li>
    
    
    )}
    </ul>

    {children}
</div>

}

export default DetallesProducto;