import React from "react";
import ItemsList from "../../components/ItemsList";
import {Loader} from "../../components/Loader";

const ShoppingCart = (props) => {

  const {
    albums,
    isLoading,
    selectedItems,
    onToggleIcon,
    toggleModal,
    onDeleted,
    toggleModalSecond
  } = props;

  return (
    <>
      <ItemsList
        title='You order list'
        albums={albums}
        isLoading={isLoading}
        remove={true}
        selectedItems={selectedItems}
        onToggleIcon={onToggleIcon}
        toggleModal={toggleModal}
        toggleModalSecond={toggleModalSecond}
        onDeleted={onDeleted}
      />
      {isLoading ? <Loader/> : null}
    </>
  )
};

export default ShoppingCart;