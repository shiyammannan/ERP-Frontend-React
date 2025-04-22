import React from 'react';
import '../css/Modal.css';

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="certificate_modal-backdrop" onClick={handleClose}>
      <div className="certificate_modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="certificate_modal-close" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
