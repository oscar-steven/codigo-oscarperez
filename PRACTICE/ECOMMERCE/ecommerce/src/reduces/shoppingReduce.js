import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3", price: 100 },
    { id: 4, name: "Producto 4", price: 100 },
    { id: 5, name: "Producto 5", price: 100 },
    { id: 6, name: "Producto 6", price: 100 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
