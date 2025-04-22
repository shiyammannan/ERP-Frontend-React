import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, value }) => (
  <div className="p-3 bg-white rounded shadow-md flex items-center">
    <div className="card-icon-container">
      <FontAwesomeIcon icon={icon} className="card-icon" />
    </div>
    <div>
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold mb-1">{value}</p>
    </div>
  </div>
);

export default Card;
