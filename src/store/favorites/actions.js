import {ADD_FAVORITES} from "./types";
import {REMOVE_FAVORITES} from "./types";

export const setFavorites= (album) => {
  return {
    type: ADD_FAVORITES,
    payload: album
  }
};

export const removeFavorites = id => {
  return {
    type: REMOVE_FAVORITES,
    payload: id
  }
};