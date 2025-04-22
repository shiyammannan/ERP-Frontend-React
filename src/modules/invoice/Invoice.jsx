// Invoice.js
import React, { useState } from 'react';
import Breadcrumbs from './components/BreadCrumbs';
import InvoiceTable from './components/InvoiceTable';
import InvoiceSummary from './components/InvoiceSummary';
import AddInvoiceModal from './components/AddInvoiceModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './css/Invoice.css';

const Invoice = () => {
  const [showModal, setShowModal] = useState(false);

  const rowData = [
    { name: 'John Doe', invoiceNumber: '1234567890', mailId: 'john.doe@example.com', courses: 'Math, Science', batch: '2023' },
    { name: 'Jane Smith', invoiceNumber: '0987654321', mailId: 'jane.smith@example.com', courses: 'History, English', batch: '2024' },
    // Add more student data here
  ];

  const breadcrumbs = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Invoice', link: '/studentprofile' },
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Invoice</h1>
          <br />
          <InvoiceSummary />
          <div className="mt-4 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Invoices</h2>
            <button onClick={handleShowModal} className=" bg-pink-500 text-white px-4 py-2 rounded">
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Invoice
            </button>
          </div>
          <InvoiceTable rowData={rowData} />
          <AddInvoiceModal show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
