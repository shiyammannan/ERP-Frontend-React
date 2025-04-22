import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ViewInvoice from './ViewInvoice';
import EditInvoice from './EditInvoice';

const InvoiceTable = ({ rowData }) => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const columnDefs = [
    { headerName: 'CIN', field: 'company invoice number', filter: 'agTextColumnFilter' },
    { headerName: 'Invoice Number', field: 'invoiceNumber', filter: 'agTextColumnFilter' },
    { headerName: 'Mail ID', field: 'mailId' },
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

  const handleAction = (actionType, invoice) => {
    setSelectedInvoice(invoice);
    if (actionType === 'view') {
      setShowViewModal(true);
    }
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setShowEditModal(true);
  };

  const handleClose = () => {
    setShowViewModal(false);
    setShowEditModal(false);
    setSelectedInvoice(null);
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
        <ViewInvoice
          invoice={selectedInvoice}
          show={showViewModal}
          handleClose={handleClose}
        />
      )}
      {showEditModal && (
        <EditInvoice
          show={showEditModal}
          handleClose={handleClose}
          invoice={selectedInvoice}
        />
      )}
    </div>
  );
};

export default InvoiceTable;
