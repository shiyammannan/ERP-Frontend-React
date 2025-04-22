import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const InvoiceSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="p-4 bg-white rounded shadow-md flex items-center">
        <div className="card-icon-container">
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
        </div>
        <div>
          <h2 className="text-l text-gray-500">Total Invoice</h2>
          <p className="text-xl font-bold mb-1">2,000</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow-md flex items-center">
        <div className="card-icon-container">
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
        </div>
        <div>
          <h2 className="text-l text-gray-500">Pending Invoice</h2>
          <p className="text-xl font-bold mb-1">1,800</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow-md flex items-center">
        <div className="card-icon-container">
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
        </div>
        <div>
          <h2 className="text-l text-gray-500">Paid Invoice</h2>
          <p className="text-xl font-bold mb-1">150</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded shadow-md flex items-center">
        <div className="card-icon-container">
          <FontAwesomeIcon icon={faUsers} className="card-icon" />
        </div>
        <div>
          <h2 className="text-l text-gray-500">Pending Amount</h2>
          <p className="text-xl font-bold mb-1">50</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
