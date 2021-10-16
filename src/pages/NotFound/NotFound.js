import React from "react";
import {Link} from "react-router-dom";

import './NotFound.scss';

const NotFound = () => {
  return (
    <div>
      <div className='error'>Page not found, please return back to homepage</div>
      <Link to='/' className='btn error-btn'>Return</Link>
    </div>
  )
};

export default NotFound;