import React from "react";

export default function ProductItem({ product, addToCart }) {
  return (
    <div>
      <span>{product.name} - ${product.price}</span>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
}
