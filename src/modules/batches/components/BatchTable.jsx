import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Switch from 'react-switch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AddBatchModal from "../components/AddBatchesModal"
import ViewModal from './ViewModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const BatchTable = () => {
  const [rowData, setRowData] = useState([
    { batchName: "Batch A", batchCode: "A001", staffName: "John Doe", course: "Reactjs", active: true },
    { batchName: "Batch B", batchCode: "B001", staffName: "Jane Smith", course: "Python", active: false },
    { batchName: "Batch C", batchCode: "C001", staffName: "Shiyam", course: "Java", active: true },
  ]);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState(null);

  const handleToggle = (rowIndex) => {
    setRowData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].active = !newData[rowIndex].active;
      return newData;
    });
  };

  const handleModalClose = () => {
    setModalData(null);
    setModalType(null);
  };

  const handleSave = (updatedData) => {
    setRowData((prevData) => prevData.map((data) => (data.batchName === updatedData.batchName ? updatedData : data)));
    handleModalClose();
  };

  const handleDelete = (batch) => {
    setRowData((prevData) => prevData.filter((data) => data.batchName !== batch.batchName));
    handleModalClose();
  };

  const columnDefs = [
    { headerName: "Batch Name", field: "batchName", filter: "agTextColumnFilter" },
    { headerName: "Batch Code", field: "batchCode", filter: "agTextColumnFilter" },
    { headerName: "Staff Name", field: "staffName" },
    { headerName: "Course", field: "course", filter: "agTextColumnFilter" },
    {
      headerName: "Active Status",
      field: "active",
      cellRenderer: (params) => (
        <Switch
          checked={params.data.active}
          onChange={() => handleToggle(params.node.rowIndex)}
          onColor="#86eb78"
          onHandleColor="#47ac3a"
          offColor="#eb7878"
          offHandleColor="#ff0000"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={38}
          className="react-switch"
          id="material-switch"
        />
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
          <button title="Edit" onClick={() => { setModalData(params.data); setModalType('edit'); }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button title="Delete" onClick={() => { setModalData(params.data); setModalType('delete'); }}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="ag-theme-alpine mt-4" style={{ height: 300, width: '100%' }}>
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
      {modalType === 'view' && <ViewModal batch={modalData} onClose={handleModalClose} />}
      {modalType === 'edit' && <EditModal batch={modalData} onClose={handleModalClose} onSave={handleSave} />}
      {modalType === 'delete' && <DeleteModal batch={modalData} onClose={handleModalClose} onDelete={handleDelete} />}
    </div>
  );
};

export default BatchTable;
