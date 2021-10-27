import React from "react";

import './Item.scss';
import {useDispatch, useSelector} from "react-redux";
import {removeFavorites, setFavorites} from "../../store/favorites/actions";

const Item = (props) => {

  const dispatch = useDispatch();
  const selected = useSelector(state => state.favoritesList);

  const {
    album,
    band,
    price,
    release,
    img,
    id,
    toggleModal,
    onDeleted,
    toggleModalSecond
  } = props;

  const handleModal = (e) => {
    e.preventDefault();
    toggleModal()
  };

  const handleIcon = (e) => {
    e.preventDefault();
    if (!selected.includes(id)) {
      dispatch(setFavorites(id))
    } else {
      dispatch(removeFavorites(id))
    }
  };

  const handleDelete = e => {
    e.preventDefault();
    toggleModalSecond();
  };

  return (
    <>
      <td><img src={img}
               alt='album'/></td>
      <td>{band}</td>
      <td>{album}</td>
      <td className='price'>{price} <span>$</span></td>
      <td>{release}</td>
      <td><a href='/'
             onClick={handleIcon}>
        {selected.includes(id) ? <i className="fas fa-star"
                                    onClick={onDeleted}></i> : <i className="far fa-star"></i>}
      </a></td>
      {props.remove ? null : <td><a href='/'
                                    onClick={handleModal}>
        <i className="fas fa-shopping-cart"></i>
      </a></td>}
      {props.remove ? <td><a href="/"
                             onClick={handleDelete}><i className="fas fa-trash-alt"></i></a></td> : null}
    </>
  )
};

export default Item;
