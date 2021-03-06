import React from "react";
import Item from "../Item";

import './ItemsList.scss'

const ItemsList = (props) => {

  const {
    toggleModal,
    onToggleFavorites,
    title,
    onDeleted,
    toggleModalSecond,
  } = props;
  const albums = props.albums;
  const hasProperty = props.remove ? true : false;
  const albumItem = albums.map(albumsList => {
    const {id, ...albumProps} = albumsList;

    return (
      <tr key={id}
          className='item'>
        <Item
          {...albumProps}
          id={id}
          remove={hasProperty}
          onToggleFavorites={() => onToggleFavorites(id)}
          toggleModal={() => toggleModal(id)}
          onDeleted={() => onDeleted(id)}
          toggleModalSecond = {() => toggleModalSecond(id)}
        />
      </tr>
    )
  });

    return (
      <div className='container'>
        <h4 className='text-center albums__title'>{title}</h4>
        <table className='table'>
          <thead>
          <tr>
            <td></td>
            <td>Band</td>
            <td>Album</td>
            <td>Price</td>
            <td>Release year</td>
            <td>Like</td>
            {props.remove ? null : <td>Buy</td>}
            {props.remove && <td>Remove</td>}
          </tr>
          </thead>
            <tbody>
              {albumItem}
            </tbody>
        </table>
    </div>
    )
};

export default ItemsList;