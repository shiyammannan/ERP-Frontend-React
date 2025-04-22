import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../css/Editcourses.css'; // Ensure the path is correct

const EditCourseModal = ({ show, handleClose, course, handleSave }) => {
  const [formData, setFormData] = useState({
    coursename: '',
    courseid: '',
    duration: '',
    amount: '',
    noofstudents: '',
    description:'',
  });

  useEffect(() => {
    if (course) {
      setFormData(course);
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      contentLabel="Edit Course"
      className="course_edit_modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="course_edit_modal-header">
        <h2 >Edit Course</h2>
        <div className="course_edit_modal_close_button">
        <button onClick={handleClose}>X</button>
        </div>
      </div>
      <form className="course_edit_modal-form" onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            name="coursename"
            value={formData.coursename}
            onChange={handleChange}
          />
        </label>
        <label>
          Course ID:
          <input
            type="text"
            name="courseid"
            value={formData.courseid}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Students:
          <input
            type="text"
            name="noofstudents"
            value={formData.noofstudents}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <div className="course_edit_modal-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={handleClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditCourseModal;
