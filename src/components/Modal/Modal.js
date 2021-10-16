import React from "react";
import './Modal.scss';

const Modal = (props) => {

  const { isOpen, toggleModalProp, children, actions } = props;

  return (
    <div  onClick={toggleModalProp} className={isOpen ? 'modalContainer active' : 'modalContainer'}>
      <div className='modal-window' onClick={(e) => e.stopPropagation()}>
        {children}
        {actions}
      </div>
    </div>
  )
};

export default Modal;