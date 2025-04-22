import React from 'react';
import Modal from 'react-modal';
import "../css/AddEmployee.css";

const AddEmployeeModal = ({ isOpen, onRequestClose, handleChange, handleSubmit, newEmployee }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="add-employee-modal-content"
      overlayClassName="add-employee-modal-overlay"
      ariaHideApp={false}
    >
      <div className="add-employee-modal-header">
        <h2 className="add-employee-modal-title">Add Employee</h2>
        <button onClick={onRequestClose} className="add-employee-modal-close-button">&times;</button>
      </div>
      <form onSubmit={handleSubmit} className="add-employee-modal-form">
        <div className="add-employee-modal-grid">
          <div>
            <label className="add-employee-modal-label">Name</label>
            <input
              type="text"
              name="add_employee_name"
              value={newEmployee.empname}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Phone Number</label>
            <input
              type="text"
              name="add_employee_phoneNumber"
              value={newEmployee.phonenumber}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Mail ID</label>
            <input
              type="email"
              name="add_employee_mailId"
              value={newEmployee.mailid}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Role</label>
            <input
              type="text"
              name="add_employee_role"
              value={newEmployee.role}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Salary</label>
            <input
              type="text"
              name="add_employee_salary"
              value={newEmployee.salary}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Street</label>
            <input
              type="text"
              name="add_employee_street"
              value={newEmployee.state}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Locality</label>
            <input
              type="text"
              name="add_employee_locality"
              value={newEmployee.locality}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">State</label>
            <input
              type="text"
              name="add_employee_state"
              value={newEmployee.state}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">District</label>
            <input
              type="text"
              name="add_employee_district"
              value={newEmployee.district}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">City</label>
            <input
              type="text"
              name="add_employee_city"
              value={newEmployee.city}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Pin-code</label>
            <input
              type="text"
              name="add_employee_pincode"
              value={newEmployee.pincode}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Degree</label>
            <input
              type="text"
              name="add_employee_degree"
              value={newEmployee.degree}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Passed Out Year</label>
            <input
              type="text"
              name="add_employee_passedOutYear"
              value={newEmployee.passedOutYear}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">PAN</label>
            <input
              type="text"
              name="add_employee_pan"
              value={newEmployee.pan}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Account Number</label>
            <input
              type="text"
              name="add_employee_accountNumber"
              value={newEmployee.accountNumber}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">IFSC Code</label>
            <input
              type="text"
              name="add_employee_ifscCode"
              value={newEmployee.ifscCode}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Bank Branch</label>
            <input
              type="text"
              name="add_employee_bankBranch"
              value={newEmployee.bankBranch}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Bank Name</label>
            <input
              type="text"
              name="add_employee_bankName"
              value={newEmployee.bankName}
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
          <div>
            <label className="add-employee-modal-label">Profile Image</label>
            <input
              type="file"
              name="add_employee_profileImage"
              onChange={handleChange}
              className="add-employee-modal-input"
            />
          </div>
        </div>
        <div className="add-employee-modal-submit-button">
          <button type="submit">
            Add Employee
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddEmployeeModal;
