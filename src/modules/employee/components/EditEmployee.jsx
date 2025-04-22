import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../css/EditEmployee.css";

const EditEmployeeModal = ({ isOpen, onRequestClose, handleChange, handleSubmit, employee }) => {
    if (!employee) {
        return null; // or a loading spinner, or a default state
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Employee"
            className="custom-edit-modal"
            overlayClassName="custom-edit-overlay"
        >
            <div className="custom-edit-content">
                <button
                    onClick={onRequestClose}
                    className="custom-edit-close"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
                <form onSubmit={handleSubmit} className="custom-edit-form">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="edit_employee_name"
                            value={employee.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="edit_employee_phoneNumber"
                            value={employee.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Mail ID</label>
                        <input
                            type="email"
                            name="edit_employee_mailId"
                            value={employee.mailId}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Position</label>
                        <input
                            type="text"
                            name="edit_employee_position"
                            value={employee.position}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input
                            type="text"
                            name="edit_employee_salary"
                            value={employee.salary}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Street</label>
                        <input
                            type="text"
                            name="edit_employee_street"
                            value={employee.street}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Locality</label>
                        <input
                            type="text"
                            name="edit_employee_locality"
                            value={employee.locality}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>State</label>
                        <input
                            type="text"
                            name="edit_employee_state"
                            value={employee.state}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>District</label>
                        <input
                            type="text"
                            name="edit_employee_district"
                            value={employee.district}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>City</label>
                        <input
                            type="text"
                            name="edit_employee_city"
                            value={employee.city}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Pin-code</label>
                        <input
                            type="text"
                            name="edit_employee_pincode"
                            value={employee.pincode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Degree</label>
                        <input
                            type="text"
                            name="edit_employee_degree"
                            value={employee.degree}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Passed Out Year</label>
                        <input
                            type="text"
                            name="edit_employee_passedOutYear"
                            value={employee.passedOutYear}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>PAN</label>
                        <input
                            type="text"
                            name="edit_employee_pan"
                            value={employee.pan}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Account Number</label>
                        <input
                            type="text"
                            name="edit_employee_accountNumber"
                            value={employee.accountNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>IFSC Code</label>
                        <input
                            type="text"
                            name="edit_employee_ifscCode"
                            value={employee.ifscCode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Bank Branch</label>
                        <input
                            type="text"
                            name="edit_employee_bankBranch"
                            value={employee.bankBranch}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Bank Name</label>
                        <input
                            type="text"
                            name="edit_employee_bankName"
                            value={employee.bankName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div>
                        <label>Profile Image</label>
                        <input
                            type="file"
                            name="edit_employee_profileImage"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    {/* <div className="col-span-2 custom-edit-checkbox">
                        <input
                            type="checkbox"
                            name="active"
                            checked={employee.active}
                            onChange={(e) =>
                                handleChange({
                                    target: {
                                        name: "active",
                                        value: e.target.checked,
                                    },
                                })
                            }
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label className="ml-2 block text-gray-700">Active</label>
                    </div> */}
                    <br />
                    <div className="custom-edit-actions">
                        <button
                            type="submit"
                            className="custom-edit-save"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={onRequestClose}
                            className="custom-edit-cancel"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditEmployeeModal;
