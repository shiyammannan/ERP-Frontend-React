import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Switch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CourseTable = ({ rowData, handleToggle, handleShowViewModal, handleShowEditModal, handleShowDeleteModal }) => {
  const columnDefs = [
    { headerName: "SL. NO", field: "sno", filter: "agTextColumnFilter" },
    { headerName: "Course Name", field: "coursename", filter: "agTextColumnFilter" },
    { headerName: "Course Id", field: "courseid", filter: "agTextColumnFilter" },
    { headerName: "Duration", field: "duration", filter: "agTextColumnFilter" },
    { headerName: "Amount", field: "amount", filter: "agTextColumnFilter" },
    { headerName: "No Of Students", field: "noofstudents", filter: "agTextColumnFilter" },
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
      field: "actions",
      cellRenderer: (params) => (
        <div className="flex justify-around">
          <button title="View" onClick={() => handleShowViewModal(params.data)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button title="Edit" onClick={() => handleShowEditModal(params.data)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button title="Delete" onClick={() => handleShowDeleteModal(params.data)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )
    }
  ];

  return (
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
  );
};

export default CourseTable;
