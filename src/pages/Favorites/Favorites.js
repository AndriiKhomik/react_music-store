import React from "react";
import ItemsList from "../../components/ItemsList";
import {useSelector} from "react-redux";
import {Loader} from "../../components/Loader";

const Favorites = (props) => {

  const albumsList = useSelector(state => state.albumsList);
  const favorite = useSelector(state => state.favoritesList);
  const favoritesList = albumsList.filter(album => favorite.includes(album.id));

  const {
    onToggleFavorites,
    toggleModal,
    onDeleted,
    isLoading
  } = props;

  return (
    <>
      <ItemsList
        title='You favorite list'
        albums={favoritesList}
        onToggleFavorites={onToggleFavorites}
        toggleModal={toggleModal}
        onDeleted={onDeleted}
      />
      {isLoading && <Loader />}
    </>
  )
};

export default Favorites;