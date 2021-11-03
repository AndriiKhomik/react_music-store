import React from "react";
import ItemsList from "../../components/ItemsList";
import {useSelector} from "react-redux";
import {Loader} from "../../components/Loader";
import Order from "../../components/Order";

const Cart = (props) => {

  const albumsList = useSelector(state => state.albumsList);
  const cart = useSelector(state => state.cartList);
  const cartList = albumsList.filter(album => cart.includes(album.id));

  const {
    onToggleFavorites,
    toggleModal,
    onDeleted,
    toggleModalSecond,
    isLoading
  } = props;

  return (
    <>
      <Order />
      <ItemsList
        title='You order list'
        albums={cartList}
        remove={true}
        onToggleFavorites={onToggleFavorites}
        toggleModal={toggleModal}
        toggleModalSecond={toggleModalSecond}
        onDeleted={onDeleted}
      />
      {isLoading && <Loader />}
    </>
  )
};

export default Cart;