import React from "react";
import ItemsList from "../../components/ItemsList";
import {useSelector} from "react-redux";
import {Loader} from "../../components/Loader";

const Homepage = (props) => {

  const albumsList = useSelector(state => state.albumsList);

  const {
    isLoading,
    onToggleFavorites,
    toggleModal,
    onDeleted,
  } = props;

  return (
    <>
      <ItemsList
        title='Top rated'
        albums={albumsList}
        onToggleFavorites={onToggleFavorites}
        toggleModal={toggleModal}
        onDeleted={onDeleted}
      />
      {isLoading && <Loader />}
    </>
  )
};

export default Homepage;