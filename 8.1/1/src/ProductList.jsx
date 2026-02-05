import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Productos</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
