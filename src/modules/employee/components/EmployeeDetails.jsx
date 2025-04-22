import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../css/ViewEmployee.css";

const EmployeeDetailModal = ({ isOpen, onRequestClose, employee }) => {
  if (!employee) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Employee Details"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-full">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
        <div className="space-y-6">
          {/* Profile Image */}
          {employee.profileImage && (
            <div className="flex justify-center mb-4">
              <img 
                src={employee.profileImage} 
                alt={`${employee.name}'s profile`} 
                className="rounded-full w-32 h-32 object-cover" 
              />
            </div>
          )}
          {/* Bio-data Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Bio-data</h3>
            <div className="grid grid-cols-3 gap-4">
              <p className="break-words"><strong>SL. NO:</strong> {employee.sno}</p>
              <p className="break-words"><strong>Name:</strong> {employee.name}</p>
              <p className="break-words"><strong>Degree:</strong> {employee.degree}</p>
              <p className="break-words"><strong>Passed Out Year:</strong> {employee.passedOutYear}</p>
              <p className="break-words"><strong>PAN:</strong> {employee.pan}</p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="break-words"><strong>Contact Number:</strong></p>
                <p className="break-words">{employee.phoneNumber}</p>
              </div>
              <div>
                <p className="break-words"><strong>Email ID:</strong></p>
                <p className="break-words">{employee.mailId}</p>
              </div>
              <div>
                <p className="break-words"><strong>Street:</strong></p>
                <p className="break-words">{employee.street}</p>
              </div>
              <div>
                <p className="break-words"><strong>Locality:</strong></p>
                <p className="break-words">{employee.locality}</p>
              </div>
              <div>
                <p className="break-words"><strong>State:</strong></p>
                <p className="break-words">{employee.state}</p>
              </div>
              <div>
                <p className="break-words"><strong>District:</strong></p>
                <p className="break-words">{employee.district}</p>
              </div>
              <div>
                <p className="break-words"><strong>City:</strong></p>
                <p className="break-words">{employee.city}</p>
              </div>
              <div>
                <p className="break-words"><strong>Pin-code:</strong></p>
                <p className="break-words">{employee.pincode}</p>
              </div>
            </div>
          </div>

          {/* Tax Info Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Tax Info</h3>
            <div className="grid grid-cols-3 gap-4">
              <p className="break-words"><strong>Salary:</strong> {employee.salary}</p>
            </div>
          </div>

          {/* Bank Info Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Bank Info</h3>
            <div className="grid grid-cols-3 gap-4">
              <p className="break-words"><strong>Account Number:</strong> {employee.accountNumber}</p>
              <p className="break-words"><strong>IFSC Code:</strong> {employee.ifscCode}</p>
              <p className="break-words"><strong>Bank Branch:</strong> {employee.bankBranch}</p>
              <p className="break-words"><strong>Bank Name:</strong> {employee.bankName}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EmployeeDetailModal;
