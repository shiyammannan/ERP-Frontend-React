import React from 'react';
import '../css/DeleteModal.css';

const DeleteModal = ({ batch, onClose, onDelete }) => {
  return (
    <div className="modal">
      <div className="delete-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='headings' >Delete Batch</h2>
        <p>Are you sure you want to delete {batch.batchName}?</p>
        <div className="delete-modal-buttons">
          <button className="confirm-button" onClick={() => onDelete(batch)}>Delete</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
