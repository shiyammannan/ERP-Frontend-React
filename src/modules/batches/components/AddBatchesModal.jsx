import React, { useState } from 'react';
import '../css/AddBatchModal.css';

const AddBatchModal = ({ isOpen, onClose, onSave }) => {
  const [batchName, setBatchName] = useState('');
  const [batchNumber, setBatchNumber] = useState('');
  const [staffName, setStaffName] = useState('');
  const [courses, setCourses] = useState('');

  const handleSave = () => {
    const newBatch = {
      batchName,
      batchNumber,
      staffName,
      courses
    };
    onSave(newBatch);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="add_batch_modal_content">
      <span className="close" onClick={onClose}>&times;</span>
        <h2 className="add_batch_heading">Add New Batch</h2>
        <form className="add-batch-form">
          <div className="form-group">
            <label>Batch Name:</label>
            <input 
              type="text" 
              value={batchName} 
              onChange={(e) => setBatchName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Batch Number:</label>
            <input 
              type="text" 
              value={batchNumber} 
              onChange={(e) => setBatchNumber(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Staff Name:</label>
            <input 
              type="text" 
              value={staffName} 
              onChange={(e) => setStaffName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Courses:</label>
            <input 
              type="text" 
              value={courses} 
              onChange={(e) => setCourses(e.target.value)} 
            />
          </div>
          <button 
            type="button" 
            className="save-button" 
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBatchModal;
