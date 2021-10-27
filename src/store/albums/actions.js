import {SET_ALBUMS} from "./types";
import {getAlbums} from "../../api/requestProducts";

export const setAlbums = (albums) => {
  return {
    type: SET_ALBUMS,
    payload: albums
  }
};

export const fetchAlbums = () => (dispatch, getState) => {
  getAlbums()
    .then(albums => {
      dispatch(setAlbums(albums))
    })
};

