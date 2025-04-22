// components/CourseCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ name, mentor, medalColor }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faMedal} className={`text-${medalColor}-500 mr-2`} />
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <p className="text-gray-600">Mentor: {mentor}</p>
    </div>
  );
};

export default CourseCard;
