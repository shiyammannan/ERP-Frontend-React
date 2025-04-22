import React from 'react';
import '../css/ViewModal.css';

const ViewModal = ({ batch, onClose }) => {
  // Ensure batch and students array are defined
  const students = batch?.students || [];

  return (
    <div className="modal">
      <div className="view_batch_modal_content ">
        <span className="view_batch_close" onClick={onClose}>&times;</span>
        <h2 className='view_batch_heading'>View Batch</h2>
        <ul>
          <li><strong>Batch Name:</strong> {batch?.batchName}</li>
          <li><strong>Batch Code:</strong> {batch?.batchCode}</li>
          <li><strong>Staff Name:</strong> {batch?.staffName}</li>
          <li><strong>Course:</strong> {batch?.course}</li>
        </ul>
        <h3 className='view_heading'>Students</h3>
        <table className="view_batch_table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Contact</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student?.name}</td>
                <td>{student?.id}</td>
                <td>{student?.contact}</td>
                <td>{student?.active ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewModal;
