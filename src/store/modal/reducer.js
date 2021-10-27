import {
  OPEN_FIRST_MODAL,
  OPEN_SECOND_MODAL,
  CLOSE_FIRST_MODAL,
  CLOSE_SECOND_MODAL
} from "./types";

export const modalFirstReducer = ((state = false, action) => {
  switch (action.type) {
    case OPEN_FIRST_MODAL:
      return action.payload;

    case CLOSE_FIRST_MODAL:
      return action.payload;

    default:
      return state
  }
});

export const modalSecondReducer = ((state = false, action) => {
  switch (action.type) {

    case OPEN_SECOND_MODAL:
      return action.payload;

    case CLOSE_SECOND_MODAL:
      return action.payload;

    default:
      return state
  }
});