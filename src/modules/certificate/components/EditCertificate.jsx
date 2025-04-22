// AddcertificateModal.js
import React, { useState } from 'react';
import '../css/EditCertificate.css';

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
    <div >
        <div >
          <h2 className='certificate_edit_head'>Edit certificate</h2>
        </div>
      <div className='certificate_edit_body' >
        <form onSubmit={handleSubmit} className="certificate_edit_modal-form">
          <div className="certificate_edit_form-row">
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
          <div className="certificate_edit_form-row">
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
          <button type="submit" className="certificate_edit_modal-submit-button">Submit</button>
        </form>
      </div>
      </div>
  );
};

export default AddCertificateModal;
