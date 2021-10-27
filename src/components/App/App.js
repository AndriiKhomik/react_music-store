import React, {useEffect, useState} from "react";
import Modal from "../Modal";
import Header from "../Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import Cart from "../../pages/Cart";
import NotFound from "../../pages/NotFound";
import Homepage from "../../pages/Homepage";
import Favorites from "../../pages/Favorites";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, setToCart} from "../../store/cart/actions";
import {closeFirstModal, closeSecondModal, openFirstModal, openSecondModal} from "../../store/modal/actions";
import {fetchAlbums} from "../../store/albums/actions";

const App = () => {

  const [deleteBtId, setDeleteById] = useState(null);
  const [cartId, setCartId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartList);
  const isOpenFirstModal = useSelector(state => state.modalFirst);
  const isOpenSecondModal = useSelector(state => state.modalSecond);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAlbums());
      setIsLoading(false);
    }, 1000)
  }, [dispatch]);

  const onToggleFavorites = (id) => {
    return id
  };

  const openModalFirst = (id) => {
    setCartId(id);
    dispatch(openFirstModal(!isOpenFirstModal))
  };

  const addToCart = () => {
    dispatch(closeFirstModal(!isOpenFirstModal));
    cart.includes(cartId) || dispatch(setToCart(cartId))
  };

  const openModalSecond = (id) => {
    dispatch(openSecondModal(!isOpenSecondModal));
    setDeleteById(id);
  };

  const removeFromShoppingCart = () => {
    dispatch(removeFromCart(deleteBtId));
    dispatch(closeSecondModal(!isOpenSecondModal));
  };

  const deleteItem = (id) => {
    return id
  };

  const handleClickByWindow = () => {
    isOpenFirstModal && dispatch(closeFirstModal(false));
    isOpenSecondModal && dispatch(closeSecondModal(false));
  };

  return (
    <div onClick={handleClickByWindow}>
      <Header/>
      <Switch>
        <Route exact
               path='/'>
          <Homepage
            isLoading={isLoading}
            onToggleFavorites={onToggleFavorites}
            toggleModal={openModalFirst}
            onDeleted={deleteItem}
          />
        </Route>
        <Route exact
               path='/shopping-cart'>
          <Cart
            isLoading={isLoading}
            onToggleFavorites={onToggleFavorites}
            toggleModal={openModalFirst}
            toggleModalSecond={openModalSecond}
            onDeleted={deleteItem}/>
        </Route>
        <Route exact
               path='/favorites'>
          <Favorites
            isLoading={isLoading}
            onToggleFavorites={onToggleFavorites}
            toggleModal={openModalFirst}
            onDeleted={deleteItem}/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <Modal
        isOpen={isOpenFirstModal}
        toggleModalProp={openModalFirst}
        actions={<>
          <button className='btn btn-secondary'
                  onClick={addToCart}>Yes
          </button>
          <button className='btn btn-secondary'
                  onClick={() => dispatch(closeFirstModal(!isOpenFirstModal))}>Buy Later
          </button>
        </>}>

        <h2 className='title'>Do you want to buy this album?
          <span onClick={() => dispatch(closeFirstModal(!isOpenFirstModal))}>
            <i className="fas fa-times"/>
          </span>
        </h2>
        <div className='text'>If you have some doubts, please add it to favorite and make decision later</div>
      </Modal>

      <Modal
        isOpen={isOpenSecondModal}
        toggleModalProp={openModalSecond}
        actions={<>
          <button className='btn btn-secondary'
                  onClick={removeFromShoppingCart}>Yes
          </button>
          <button className='btn btn-secondary'
                  onClick={() => dispatch(closeSecondModal(!isOpenSecondModal))}>No
          </button>
        </>}>

        <h2 className='title'>Delete?
          <span onClick={() => dispatch(closeSecondModal(!isOpenSecondModal))}>
            <i className="fas fa-times"/>
          </span>
        </h2>
        <div className='text'>Do you want remove his album from your order list?</div>
      </Modal>
    </div>
  )
};

export default App;

