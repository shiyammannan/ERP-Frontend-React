import React from 'react';
import Modal from 'react-modal';

const DeleteEmployeeModal = ({ isOpen, onRequestClose, handleDelete, employee }) => {
    if (!employee) {
        return null; // or a loading spinner, or a default state
      }
    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-4 bg-white rounded shadow-md w-1/3 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Delete Employee</h2>
          <button onClick={onRequestClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p>Are you sure you want to delete <strong>{employee.name}</strong>?</p>
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={() => handleDelete(employee.sno)} className="bg-red-500 text-white px-4 py-2 mr-48 rounded">Delete</button>
          <button onClick={onRequestClose} className="bg-gray-300 text-black px-4 py-2 rounded mr-10">Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmployeeModal;
