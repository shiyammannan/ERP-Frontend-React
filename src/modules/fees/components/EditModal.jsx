import React, { useState } from 'react';
import '../css/EditModal.css';

const EditModal = ({ student, onClose, onSave }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="edit-fees_modal-content">
        <span className="edit-fees_close" onClick={onClose}>&times;</span>
        <h2 className='edit-fees_heading'>Edit Student</h2>
        <form onSubmit={handleSubmit} className="edit-fees_form">
          <div className="form-section">
            <h3 className='topic'>Personal Info</h3>
            <div className="form-group">
              <label className='topic'>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              <label className='topic'>Phone Number:</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <label className='topic'>Mail ID:</label>
              <input type="text" name="mailId" value={formData.mailId} onChange={handleChange} />
              <label className='topic'>Courses:</label>
              <input type="text" name="courses" value={formData.courses} onChange={handleChange} />
              <label className='topic'>Batch:</label>
              <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
