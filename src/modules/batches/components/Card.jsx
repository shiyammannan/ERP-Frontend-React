import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, value }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md flex items-center">
      <div className="card-icon-container">
        <FontAwesomeIcon icon={faUsers} className="card-icon" />
      </div>
      <div>
        <h2 className="text-l text-gray-500">{title}</h2>
        <p className="text-xl font-bold mb-1">{value}</p>
      </div>
    </div>
  );
};

export default Card;
