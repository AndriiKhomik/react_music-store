import {SET_ALBUMS} from "./types";

export const albumsReducer = ((state = [], action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.payload;

    default:
      return state;
  }
});