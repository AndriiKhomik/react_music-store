import React from "react";

import './Header.scss';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const count = useSelector(state => state);

  return (
    <div className='header'>
      <div className='container header__container'>
        <a href="https://www.billboard.com/">Music Store</a>
        <h2 className='header__title text-center'>
          You can buy top albums regarding <span>billboard</span> chart
        </h2>
        <Link to='/shopping-cart'>
          <i className="fas fa-shopping-cart header__cart"></i><span>{count.cartList.length}</span>
        </Link>
      </div>
      <div className='container header__buttons'>
        <NavLink exact to='/'
                 className='btn header__btn'
                 activeClassName="selected">Home</NavLink>
        <NavLink to='/shopping-cart'
                 activeClassName="selected"
                 className='btn header__btn'>Shopping Cart</NavLink>
        <NavLink to='/favorites'
                 activeClassName="selected"
                 className='btn header__btn'>Favorites</NavLink>
      </div>
    </div>
  )
};

export default Header;