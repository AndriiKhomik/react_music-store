import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {albumsReducer} from "./albums/reducer";
import {favoritesReducer} from "./favorites/reducer";
import thunk from "redux-thunk";
import {cartReducer} from "./cart/reducer";
import {modalFirstReducer, modalSecondReducer} from "./modal/reducer";
import {ADD_FAVORITES, REMOVE_FAVORITES} from "./favorites/types";
import {ADD_TO_CART, REMOVE_FROM_CART} from "./cart/types";

const rootReducer = combineReducers({
  albumsList: albumsReducer,
  favoritesList: favoritesReducer,
  cartList: cartReducer,
  modalFirst: modalFirstReducer,
  modalSecond: modalSecondReducer
});

const favoritesSyncMiddleware = ({dispatch, getState}) => next => action => {
  const result = next(action);
  if ([ADD_FAVORITES, REMOVE_FAVORITES].includes(action.type)) {
    const {favoritesList} = store.getState();
    localStorage.setItem('favorites', JSON.stringify(favoritesList))
  }
  return result
};

const cartSyncMiddleware = ({dispatch, getState}) => next => action => {
  const result = next(action);
  if ([ADD_TO_CART, REMOVE_FROM_CART].includes(action.type)) {
    const {cartList} = store.getState();
    localStorage.setItem('cartList', JSON.stringify(cartList))
  }
  return result
};

let initialState = {};
const favoritesFromLS = localStorage.getItem('favorites');
const cartFromLS = localStorage.getItem('cartList');

if (favoritesFromLS) {
  try {
    initialState = {...initialState, favoritesList: JSON.parse(favoritesFromLS)}
  }
  catch (e) {
    console.error(e)
  }
}
if (cartFromLS) {
  try {
    initialState = {...initialState, cartList: JSON.parse(cartFromLS)}
  }
  catch (e) {
    console.error(e)
  }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, favoritesSyncMiddleware, cartSyncMiddleware),
    devTools));

export default store;