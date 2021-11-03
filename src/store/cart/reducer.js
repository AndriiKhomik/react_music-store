import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from "./types";

export const cartReducer = ((state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:

      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const newState = state.filter(cartList => cartList !== action.payload);
      return newState;

    case REMOVE_ALL_FROM_CART:
      const updatedState = [];
      return updatedState;

    default:
      return state;
  }
});