function PieFicha({precio, enStock}){

return <div className="Pie-ficha"> 
    
    <p>{precio.valor} { precio.moneda}</p>
    <p>{`${precio.enOferta?  '¡OFERTA!' : 'No'} `}</p>
    <p>En stock - {`${enStock? `Precio: ${precio.valor}${precio.moneda}` : 'No disponible' }`} </p>

    </div>

}

export default PieFicha