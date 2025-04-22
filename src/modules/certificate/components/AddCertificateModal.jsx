// AddcertificateModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/AddCertificateModal.css';

const AddCertificateModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    recipientName: '',
    certificateNumber: '',
    certificateDate: '',
    courseName: '',
    founderName: '',
    note: '',
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
    <div className="certificate_add_modal-overlay">
      <div className="certificate_add_modal-container">
        <div className="certificate_add_modal-header">
          <h2 className='certificate_add_head'>Add certificate</h2>
          <button onClick={handleClose} className="certificate_add_modal-close-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="certificate_add_modal-form">
          <div className="certificate_add_form-row">
            <label>
            Recipient Name:
              <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} required />
            </label>
            <label>
            Course Name:
              <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} required />
            </label>
            <label>
            Founder:
              <input type="text" name="founderName" value={formData.founderName} onChange={handleChange} required />
            </label>
          </div>
          <div className="certificate_add_form-row">
            <label>
            Certificate Number:
              <input type="text" name="certificateNumber" value={formData.certificateNumber} onChange={handleChange} required />
            </label>
            <label>
            Certificate Date:
              <input type="date" name="certificateDate" value={formData.certificateDate} onChange={handleChange} required />
            </label>
            <label>
            Note:
              <textarea type="text" name="note" value={formData.note} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit" className="certificate_add_modal-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddCertificateModal;
