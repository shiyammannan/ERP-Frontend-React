import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Switch from 'react-switch';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import StudentProfileModal from './ViewModal'; // Ensure correct path
import EditStudentModal from './EditModal'; // Ensure correct path
import DeleteStudentModal from './DeleteModal'; // Ensure correct path

const StudentTable = ({ rowData, handleToggle, handleDelete }) => {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

<AgGridReact
  paginationPageSize={10} // Set this to one of the values in paginationPageSizeSelector
  paginationPageSizeSelector={true} // Or set to false if you don't want the page size selector
  paginationPageSizeOptions={[10, 20, 50]} // Include the values that paginationPageSize can be
  // other props
/>

  const openViewModal = (student) => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  const openEditModal = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  const openDeleteModal = (student) => {
    setSelectedStudent(student);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowViewModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedStudent(null);
  };

  const saveStudent = (updatedStudent) => {
    // Implement the logic to save the updated student
    // You might want to update the rowData here or call an API to save the changes
    console.log('Updated Student:', updatedStudent);
  };

  const columnDefs = [
    { headerName: "SL. NO", field: "sno", filter: "agTextColumnFilter" },
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    { headerName: "Student Id", field: "studentid" },
    { headerName: "Batch", field: "batch" },
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
          <button title="View" onClick={() => openViewModal(params.data)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button title="Edit" onClick={() => openEditModal(params.data)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button title="Delete" onClick={() => openDeleteModal(params.data)}>
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
      {showViewModal && selectedStudent && (
        <StudentProfileModal 
          isOpen={showViewModal} 
          onRequestClose={closeModal} 
          student={selectedStudent} 
        />
      )}
      {showEditModal && selectedStudent && (
        <EditStudentModal 
          isOpen={showEditModal} 
          onRequestClose={closeModal} 
          student={selectedStudent} 
          onSave={saveStudent} 
        />
      )}
      {showDeleteModal && selectedStudent && (
        <DeleteStudentModal 
          isOpen={showDeleteModal} 
          onRequestClose={closeModal} 
          student={selectedStudent} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
};

export default StudentTable;
