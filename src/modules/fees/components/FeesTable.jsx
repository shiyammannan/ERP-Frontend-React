import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "../css/FeesTable.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const StudentProfileTable = () => {
  const [rowData, setRowData] = useState([
    { name: "John Doe", phoneNumber: "1234567890", mailId: "john@example.com", courses: "Reactjs,Nodejs", batch: "2021", feesStatus: "Paid" },
    { name: "Jane Smith", phoneNumber: "0987654321", mailId: "jane@example.com", courses: "Python,Java", batch: "2022", feesStatus: "Pending" },
    { name: "Shiyam", phoneNumber: "0987654321", mailId: "shiyam@example.com", courses: "Python,Java", batch: "2022", feesStatus: "Pending" },
  ]);

  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState(null);

  const handleModalClose = () => {
    setModalData(null);
    setModalType(null);
  };

  const handleSave = (updatedData) => {
    setRowData((prevData) => prevData.map((data) => (data.name === updatedData.name ? updatedData : data)));
    handleModalClose();
  };

  const handleDelete = (student) => {
    setRowData((prevData) => prevData.filter((data) => data.name !== student.name));
    handleModalClose();
  };

  const columnDefs = [
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    { headerName: "Phone Number", field: "phoneNumber" },
    { headerName: "Mail ID", field: "mailId" },
    { headerName: "Courses", field: "courses", filter: "agTextColumnFilter" },
    { headerName: "Batch", field: "batch", filter: "agTextColumnFilter" },
    {
      headerName: "Fees Status",
      field: "feesStatus",
      cellRenderer: (params) => (
        <span className={`fees-status ${params.value.toLowerCase()}`}>
          {params.value}
        </span>
      )
    },
    {
      headerName: "Actions",
      field: "view",
      cellRenderer: (params) => (
        <div className="flex justify-around">
          <button title="View" onClick={() => { setModalData(params.data); setModalType('view'); }}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button title="View" onClick={() => { setModalData(params.data); setModalType('edit'); }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button title="View" onClick={() => { setModalData(params.data); setModalType('delete'); }}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="ag-theme-alpine mt-4" style={{ height: 400, width: '100%' }}>
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
      {modalType === 'view' && <ViewModal student={modalData} onClose={handleModalClose} />}
      {modalType === 'edit' && <EditModal student={modalData} onClose={handleModalClose} onSave={handleSave} />}
      {modalType === 'delete' && <DeleteModal student={modalData} onClose={handleModalClose} onDelete={handleDelete} />}
    </div>
  );
};

export default StudentProfileTable;
