import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Modal from './Modal';
import ViewCertificate from './ViewCertificate';
import EditCertificate from './EditCertificate';

const CertificateTable = ({ rowData }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const columnDefs = [
    { headerName: 'Name', field: 'studentname', filter: 'agTextColumnFilter' },
    { headerName: 'Certificate Number', field: 'certificateNumber', filter: 'agTextColumnFilter' },
    { headerName: 'Student ID', field: 'studentid' },
    { headerName: 'Courses', field: 'courses', filter: 'agTextColumnFilter' },
    { headerName: 'Batch', field: 'batch', filter: 'agTextColumnFilter' },
    {
      headerName: 'Actions',
      field: 'view',
      cellRenderer: (params) => (
        <div className="flex justify-around">
          <button title="View" onClick={() => handleAction('view', params.data)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button title="Edit" onClick={() => handleEdit(params.data)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      ),
    },
  ];

  const handleAction = (actionType, certificate) => {
    setSelectedCertificate(certificate);
    if (actionType === 'view') {
      setShowViewModal(true);
    }
  };

  const handleEdit = (certificate) => {
    setSelectedCertificate(certificate);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setShowViewModal(false);
    setShowEditModal(false);
    setSelectedCertificate(null);
  };

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{
            sortable: true,
            flex: 1,
            minWidth: 100,
          }}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      {showViewModal && (
        <Modal show={showViewModal} handleClose={handleClose}>
          <ViewCertificate certificate={selectedCertificate} show={showViewModal}
          handleClose={handleClose}/>
        </Modal>
      )}
      {showEditModal && (
        <Modal show={showEditModal} handleClose={handleClose}>
          <EditCertificate certificate={selectedCertificate} 
           show={showEditModal}/>
        </Modal>
      )}
    </div>
  );
};

export default CertificateTable;
