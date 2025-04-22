// components/DeleteCourses.jsx
import React from 'react';
import Modal from 'react-modal'; // Or your chosen modal library

const DeleteCourseModal = ({ show, handleClose, handleDelete }) => {
  return (
    <div className='course_delete_modal'>
      <Modal 
        isOpen={show} 
        onRequestClose={handleClose} 
        ariaHideApp={false}
        style={{
          content: {
            width: '400px',  // Set the desired width
            margin: 'auto', 
            marginTop:'200px',
            borderRadius: '8px',
            position: 'relative'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Set the overlay background color and opacity
          }
        }}
      >
        <h2 className="text-xl font-bold mb-4 mt-4">Confirm Deletion</h2>
        <button onClick={handleClose} className="absolute top-4 right-4 text-xl">&times;</button>
        <div className="p-4">
          <p>Are you sure you want to delete this course?</p>
          <div className="mt-4 ml-9">
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded ml-9">Delete</button>
            <button onClick={handleClose} className="ml-9 bg-gray-300 px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteCourseModal;
