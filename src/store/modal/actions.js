import {OPEN_FIRST_MODAL,
OPEN_SECOND_MODAL,
CLOSE_FIRST_MODAL,
CLOSE_SECOND_MODAL} from "./types";

export const openFirstModal = () => {
  return {
    type: OPEN_FIRST_MODAL,
    payload: true
  }
};

export const openSecondModal = () => {
  return {
    type: OPEN_SECOND_MODAL,
    payload: true
  }
};

export const closeFirstModal = () => {
  return {
    type: CLOSE_FIRST_MODAL,
    payload: false
  }
};

export const closeSecondModal = () => {
  return {
    type: CLOSE_SECOND_MODAL,
    payload: false
  }
};