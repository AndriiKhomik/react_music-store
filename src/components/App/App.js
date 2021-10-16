import React, {useEffect, useState} from "react";
import Modal from "../Modal";
import Header from "../Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {getAlbums} from "../../api/requestAlbums";
import {Route, Switch} from "react-router-dom";
import ShoppingCart from "../../pages/ShoppingCart";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Favorites from "../../pages/Favorites";

const dataFromLC = () => {
  let data = localStorage.getItem('favorite');
  if (data === null) {
    return []
  }
  return data.split(',')
};

const App = () => {

  const [albums, setAlbums] = useState([]);
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState(dataFromLC());
  const [deleteBtId, setDeleteById] = useState(null);

  useEffect(() => {
    fetchFilms()
  }, []);

  const fetchFilms = () => {
    setTimeout(() => {
      getAlbums()
        .then(albums => {
          setAlbums(albums)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, 1500)
  };

  const onToggleIcon = (id) => {
    let indexArray = selectedItems;
    const uniqueIndex = indexArray.findIndex((elem) => elem === id);

    if (uniqueIndex <= -1) {
      setSelectedItems([
        ...indexArray,
        id
      ])
    } else if (uniqueIndex >= -1) {
      setSelectedItems([
        ...indexArray.slice(0, uniqueIndex),
        ...indexArray.slice(uniqueIndex + 1)
      ])
    }
  };

  const toggleModalFirst = () => {
    setIsOpenFirst(!isOpenFirst)
  };

  const toggleModalSecond = (id) => {
    setIsOpenSecond(!isOpenSecond);
    setDeleteById(id);
  };

  const deleteItem = (id) => {
    const idx = albums.findIndex((album) => album.id === id);

    const newAlbums = [
      ...albums.slice(0, idx),
      ...albums.slice(idx + 1)
    ];
    setAlbums(newAlbums)
  };

  const handleSecondModal = () => {
    toggleModalSecond();
    deleteItem(deleteBtId)
  };

  localStorage.setItem('favorite', selectedItems);
  return (
    <>
      <Header/>
      <Switch>
        <Route exact
               path='/'>
          <Homepage
            albums={albums}
            isLoading={isLoading}
            selectedItems={selectedItems}
            onToggleIcon={onToggleIcon}
            toggleModal={toggleModalFirst}
            onDeleted={deleteItem}
          />
        </Route>
        <Route exact
               path='/shopping-cart'>
          <ShoppingCart
            albums={albums}
            isLoading={isLoading}
            selectedItems={selectedItems}
            onToggleIcon={onToggleIcon}
            toggleModal={toggleModalFirst}
            toggleModalSecond={toggleModalSecond}
            onDeleted={deleteItem}/>
        </Route>
        <Route exact
               path='/favorites'>
          <Favorites
            albums={albums}
            isLoading={isLoading}
            selectedItems={selectedItems}
            onToggleIcon={onToggleIcon}
            toggleModal={toggleModalFirst}
            onDeleted={deleteItem}/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <Modal
        isOpen={isOpenFirst}
        toggleModalProp={toggleModalFirst}
        actions={<>
          <button className='btn btn-secondary'
                  onClick={toggleModalFirst}>Yes
          </button>
          <button className='btn btn-secondary'
                  onClick={toggleModalFirst}>Buy Later
          </button>
        </>}>

        <h2 className='title'>Do you want to buy this album?
          <span onClick={toggleModalFirst}>
            <i className="fas fa-times"/>
          </span>
        </h2>
        <div className='text'>If you have some doubts, please add it to favorite and make decision later</div>
      </Modal>

      <Modal
        isOpen={isOpenSecond}
        toggleModalProp={toggleModalSecond}
        actions={<>
          <button className='btn btn-secondary'
                  onClick={handleSecondModal}>Yes
          </button>
          <button className='btn btn-secondary'
                  onClick={toggleModalSecond}>No
          </button>
        </>}>

        <h2 className='title'>Delete?
          <span onClick={toggleModalSecond}>
            <i className="fas fa-times"/>
          </span>
        </h2>
        <div className='text'>Do you want remove his album from your order list?</div>
      </Modal>
    </>
  )
};

export default App;

