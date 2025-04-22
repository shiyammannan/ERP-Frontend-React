// components/CourseCard.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseCard = ({ icon, title, value }) => (
  <div className="p-4 bg-white rounded shadow-md flex items-center">
    <div className="card-icon-container">
      <FontAwesomeIcon icon={icon} className="card-icon" />
    </div>
    <div>
      <h2 className="text-l text-gray-500">{title}</h2>
      <p className="text-xl font-bold mb-1">{value}</p>
    </div>
  </div>
);

export default CourseCard;
