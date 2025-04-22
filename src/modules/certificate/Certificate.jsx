// certificate.js
import React, { useState } from 'react';
import Breadcrumbs from './components/BreadCrumbs';
import CertificateTable from './components/CertificateTable';
import CertificateSummary from './components/CertificateSummary';
import AddcertificateModal from './components/AddCertificateModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './css/Certificate.css';

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);

  const rowData = [
    { studentname: 'John Doe', certificateNumber: '1234567890', studentid: '37689CB', courses: 'Python, Java', batch: '2023' },
    { studentname: 'Jane Smith', certificateNumber: '0987654321', studentid: '37699CB', courses: 'c++', batch: '2024'  },
    // Add more student data here
  ];

  const breadcrumbs = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'certificate', link: '/certificate' },
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
          <h1 className="text-4xl font-bold">Certificate</h1>
          <br />
          <CertificateSummary />
          <div className="mt-4 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Certificate</h2>
            <button onClick={handleShowModal} className=" bg-pink-500 text-white px-4 py-2 rounded">
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add certificate
            </button>
          </div>
          <CertificateTable rowData={rowData} />
          <AddcertificateModal show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
