import React from "react";

export default function Cart({ items, increment, decrement, remove, total }) {
  return (
    <div>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <span>{item.name} x {item.quantity} - ${item.price * item.quantity}</span>
            <button onClick={() => increment(item.id)}>+</button>
            <button onClick={() => decrement(item.id)}>-</button>
            <button onClick={() => remove(item.id)}>Eliminar</button>
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
}
