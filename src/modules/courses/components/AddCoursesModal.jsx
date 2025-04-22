// AddInvoiceModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddCoursesModal.css';

const AddCourseModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseId: '',
    duration: '',
    amount: '',
    noofstudents: '',
    description:'',
    status: '',
    items: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className='head'>Add Course</h2>
          <button onClick={handleClose} className="modal-close-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <label>
            Course Name:
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </label>
            <label>
            Course Id:
              <input type="text" name="companySubTitle" value={formData.companySubTitle} onChange={handleChange} required />
            </label>
            <label>
            Duration:
              <input type="text" name="companyOfficeNumber" value={formData.companyOfficeNumber} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
            Amount:
              <input type="text" name="companyPhoneNumber" value={formData.companyPhoneNumber} onChange={handleChange} required />
            </label>
            <label>
            No Of Students:
              <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} required />
            </label>
            <label>
            Description:
              <input type="text" name="companyOfficeAddress" value={formData.companyOfficeAddress} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
