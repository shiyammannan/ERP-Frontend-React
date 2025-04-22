// DeleteModal.js
import React from 'react';
import '../css/DeleteModal.css';

const DeleteModal = ({ student, onClose, onDelete }) => {
  return (
    <div className="modal">
      <div className="delete_fees_modal_content">
        <span className="delete_fees_close" onClick={onClose}>&times;</span>
        <h2 className='delete_fees_headings' >Delete Student</h2>
        <p>Are you sure you want to delete {student.name}?</p>
        <div className="delete_fees_modal_buttons">
          <button className="delete_fees_confirm_button" onClick={() => onDelete(student)}>Confirm</button>
          <button className="delete_fees_cancel_button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
