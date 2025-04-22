import React, { useState } from 'react';
import '../css/EditModal.css';

const EditModal = ({ batch, onClose, onSave }) => {
  const [formData, setFormData] = useState(batch || {});
  const [students, setStudents] = useState(batch?.students || []);
  const [newStudent, setNewStudent] = useState({
    name: '',
    id: '',
    contact: '',
    active: true
  });
  const [showStudentForm, setShowStudentForm] = useState(false); // New state for showing/hiding the student form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.id && newStudent.contact) {
      setStudents([...students, newStudent]);
      setNewStudent({
        name: '',
        id: '',
        contact: '',
        active: true
      });
    } else {
      alert('Please fill out all fields');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, students });
  };

  return (
    <div className="modal">
      <div className="edit_batch_modal_content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='heading'>Edit Batch</h2>
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-section">
            <h3 className='topic'>Batch Info</h3>
            <div className="form-group">
              <label className='topic'>Batch Name:</label>
              <input type="text" name="batchName" value={formData.batchName || ''} onChange={handleChange} />
              <label className='topic'>Batch Code:</label>
              <input type="text" name="batchCode" value={formData.batchCode || ''} onChange={handleChange} />
              <label className='topic'>Staff Name:</label>
              <input type="text" name="staffName" value={formData.staffName || ''} onChange={handleChange} />
              <label className='topic'>Course:</label>
              <input type="text" name="course" value={formData.course || ''} onChange={handleChange} />
            </div>
          </div>
          <div className="form-section">
            <h3 className='topic'>Students</h3>
            <button
              type="button"
              onClick={() => setShowStudentForm(!showStudentForm)}
              className="toggle-button"
            >
              {showStudentForm ? 'Hide Student Form' : 'Add New Student'}
            </button>
            {showStudentForm && (
              <div className="student-form">
                <div className="form-group">
                  <label className='topic'>Student Name:</label>
                  <input type="text" name="name" value={newStudent.name} onChange={handleStudentChange} />
                  <label className='topic'>Student ID:</label>
                  <input type="text" name="id" value={newStudent.id} onChange={handleStudentChange} />
                  <label className='topic'>Contact:</label>
                  <input type="text" name="contact" value={newStudent.contact} onChange={handleStudentChange} />
                  <label className='topic'>Active:</label>
                  <select name="active" value={newStudent.active} onChange={handleStudentChange}>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                  <button type="button" onClick={handleAddStudent} className="add-button">Add Student</button>
                </div>
              </div>
            )}
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
