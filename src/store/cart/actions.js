import {ADD_TO_CART} from "./types";
import {REMOVE_FROM_CART} from "./types";
import {REMOVE_ALL_FROM_CART} from "./types";

export const setToCart = album => {
  return {
    type: ADD_TO_CART,
    payload: album
  }
};

export const removeFromCart = album => {
  return {
    type: REMOVE_FROM_CART,
    payload: album
  }
};

export const removeAllFromCart = album => {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: album
  }
};