import { useReducer, useMemo } from "react";
import { cartReducer, initialState } from "./useReduceCart";
import "./App.css";
import productos from "./productos.json"; 

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = useMemo(() => {
    return state.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [state.items]);

  return (
    <div>
      <h1>Mi Tienda</h1>
      <div className="container">
        <div className="products">
          {productos.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price">${product.price}</div>
              <button
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: product })
                }
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Carrito</h2>
          {state.items.length === 0 && <p>Carrito vacío</p>}
          {state.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <div className="controls">
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: item.id })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: item.id })
                  }
                >
                  -
                </button>
                <button
                  className="remove"
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item.id })
                  }
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <div className="total">Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
