import React from 'react';
import '../css/ViewModal.css';

const ViewModal = ({ student, onClose }) => {
  // Example fee installment statuses (you might want to replace this with actual data)
  const installments = [
    { installment: "First Installment", status: "Paid" },
    { installment: "Second Installment", status: "Pending" },
    { installment: "Third Installment", status: "Paid" }
  ];

  return (
    <div className="modal">
      <div className="view_fees_modal_content">
        <span className="view_fees_close" onClick={onClose}>&times;</span>
        <h2 className='view_fees_heading'>View Student</h2>
        <ul>
          <li><strong>Name:</strong> {student.name}</li>
          <li><strong>Courses:</strong> {student.courses}</li>
          <li><strong>Batch:</strong> {student.batch}</li>
        </ul>
        <div className="fee-installments">
          {installments.map((item, index) => (
            <div key={index} className={`fee-card ${item.status.toLowerCase()}`}>
              <h3>{item.installment}</h3>
              <p>Status: {item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
