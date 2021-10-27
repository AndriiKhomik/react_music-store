import {ADD_FAVORITES} from "./types";
import {REMOVE_FAVORITES} from "./types";

export const favoritesReducer = ((state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return [...state, action.payload];


    case REMOVE_FAVORITES:
      const newState = state.filter(favoritesList => favoritesList !== action.payload);
      return newState;

    default:
      return state
  }
});