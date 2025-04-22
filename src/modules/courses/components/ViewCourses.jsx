// components/ViewCourseModal.js
import React from 'react';
import Modal from 'react-modal'; // Ensure the path is correct
import "../css/View_courses_modules.css"; // Ensure the path is correct
const ViewCourseModal = ({ show, handleClose, course }) => {
  if (!course) {
    return null;
  }

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      contentLabel="View Course"
      className="course_view_modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="course_view_modal-header">
        <h2 className='course_title'>Course Details</h2>
        <div className="course_view_modal-buttons">
        <button onClick={handleClose}>X</button>
      </div>
      </div>
      
      <div className="modal-body">
        <div className="modal-field">
          <strong >Course Name:</strong> 
          <div>
          {course.coursename}
          </div>
        </div>
        <div className="modal-field">
          <strong>Course Id:</strong> <div>{course.courseid}</div>
        </div>
        <div className="modal-field">
          <strong>Duration:</strong> <div>{course.duration}</div>
        </div>
        <div className="modal-field">
          <strong>Amount:</strong> <div>{course.amount}</div>
        </div>
        <div className="modal-field">
          <strong>No Of Students:</strong> <div>{course.noofstudents}</div>
        </div>
      </div>
      
    </Modal>
  );
};

export default ViewCourseModal;
