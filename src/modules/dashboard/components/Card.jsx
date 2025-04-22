// Card.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, content }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md flex items-center">
      <div className="card-icon-container">
        <FontAwesomeIcon icon={icon} className="card-icon" />
      </div>
      <div>
        <h2 className="text-l text-gray-500 mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
