// cartReducer.js
export const initialState = {
  items: []
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      };

    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map(i =>
            i.id === action.payload
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter(i => i.quantity > 0)
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };

    default:
      return state;
  }
}
