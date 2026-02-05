1)
El problema con useState en este caso es la incoherencia entre estados derivados y la re-renderización dispersa y que es propensa a errores.
useReducer aquí es mejor porque centraliza la lógica, todos los cambios del carrito se procesan en un solo lugar (cartReducer).
Además es más escalable.
2) 
Es el componente padre el que se rerenderiza provocando que los hijos también lo hagan.
Secuencia: 
Abre React DevTools -> pestaña Components

Selecciona BotonPromocion

Activa la opción “Highlight updates” o “Highlight renders”

Añade un producto al carrito y observa si BotonPromocion se resalta:

Si sí → React lo está re-renderizando, a pesar de no usar su estado.

Inspecciona sus props y state: si no cambian, la causa es re-render del padre, no del componente en sí.