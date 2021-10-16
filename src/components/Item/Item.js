import React from "react";

import './Item.scss';

const Item = (props) => {

  const {
    album,
    band,
    price,
    release,
    img,
    id,
    selectedItems,
    toggleModal,
    onToggleIcon,
    onDeleted,
    toggleModalSecond
  } = props;

  const handleModal = (e) => {
    e.preventDefault();
    toggleModal()
  };

  const handleIcon = (e) => {
    e.preventDefault();
    onToggleIcon()
  };

  const handleDelete = e => {
    e.preventDefault();
    toggleModalSecond()
  };

  return (
    <>
      <td><img src={img}
               alt='album'/></td>
      <td>{band}</td>
      <td>{album}</td>
      <td className='price'>{price} <span>$</span></td>
      <td>{release}</td>
      <td><a href='#'
             onClick={handleIcon}>
        {selectedItems.includes(id) ? <i className="fas fa-star" onClick={onDeleted}></i> : <i className="far fa-star"></i>}
      </a></td>
      <td><a href='#'
             onClick={handleModal}>
        <i className="fas fa-shopping-cart"></i>
      </a></td>
      {props.remove ? <td><a href="" onClick={handleDelete}><i className="fas fa-trash-alt" ></i></a></td> : null}
    </>
  )
}

export default Item;
