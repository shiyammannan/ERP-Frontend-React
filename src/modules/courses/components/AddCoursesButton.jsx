// components/AddCourseButton.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCourseButton = ({ handleShowModal }) => (
  <button onClick={handleShowModal} className="bg-pink-500 text-white px-4 py-2 rounded">
    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Course
  </button>
);

export default AddCourseButton;
