import React from "react";
import ItemsList from "../../components/ItemsList";
import {Loader} from "../../components/Loader";

const Homepage = (props) => {

  const {
    albums,
    isLoading,
    selectedItems,
    onToggleIcon,
    toggleModal,
    onDeleted,
  } = props;

  return (
    <>
      <ItemsList
        title='Top rated'
        albums={albums}
        isLoading={isLoading}
        selectedItems={selectedItems}
        onToggleIcon={onToggleIcon}
        toggleModal={toggleModal}
        onDeleted={onDeleted}
      />
      {isLoading ? <Loader/> : null}
    </>
  )
};

export default Homepage;