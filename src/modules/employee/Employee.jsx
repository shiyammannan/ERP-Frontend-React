import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from './components/BreadCrumbs';
import EmployeeList from './components/Employeelist';
import EmployeeCard from './components/EmployeeCard';
import AddEmployeeModal from './components/AddEmployee';
import EditEmployeeModal from './components/EditEmployee';
import Switch from 'react-switch';
import EmployeeDetailModal from './components/EmployeeDetails';
import DeleteEmployeeModal from './components/DeleteEmployee'; // Import the new DeleteEmployeeModal

const Employee = () => {
  const columnDefs = [
    { headerName: "SL. NO", field: "sno", filter: "agTextColumnFilter" },
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    { headerName: "Phone Number", field: "phoneNumber" },
    { headerName: "Mail ID", field: "mailId" },
    { headerName: "Position", field: "position", filter: "agTextColumnFilter" },
    { headerName: "Salary", field: "salary", filter: "agTextColumnFilter" },
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
          <button title="View" onClick={() => handleView(params.data)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button title="Edit" onClick={() => handleEdit(params.data)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button title="Delete" onClick={() => handleDeleteClick(params.data)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )
    }
  ];

  const [rowData, setRowData] = useState([
    { sno: "1", name: "John Doe", phoneNumber: "1234567890", mailId: "john@example.com", position: "Chief executive officer", salary: "50000/-", active: true },
    { sno: "2", name: "Jane Smith", phoneNumber: "0987654321", mailId: "jane@example.com", position: "Software Engineer", salary: "45000/-", active: true },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const [addEmployeeModalIsOpen, setAddEmployeeModalIsOpen] = useState(false);
  const [editEmployeeModalIsOpen, setEditEmployeeModalIsOpen] = useState(false);
  const [deleteEmployeeModalIsOpen, setDeleteEmployeeModalIsOpen] = useState(false); // New state for delete modal
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null); // State to store the selected employee for deleting
  const [newEmployee, setNewEmployee] = useState({
    sno: "",
    name: "",
    phoneNumber: "",
    mailId: "",
    position: "",
    salary: "",
    address: "",
    profileImage: "",
    degree: "",
    passedOutYear: "",
    pan: "",
    accountNumber: "",
    ifscCode: "",
    bankBranch: "",
    bankName: "",
    active: true
  });

  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Employee", link: "/Employee" },
  ];

  const handleAddEmployee = () => {
    setAddEmployeeModalIsOpen(true);
  };

  const handleCloseAddEmployeeModal = () => {
    setAddEmployeeModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRowData([...rowData, newEmployee]);
    handleCloseAddEmployeeModal();
  };

  const handleToggle = (rowIndex) => {
    const updatedRowData = [...rowData];
    updatedRowData[rowIndex].active = !updatedRowData[rowIndex].active;
    setRowData(updatedRowData);
  };

  const handleView = (employee) => {
    setEmployeeDetail(employee);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setEditEmployeeModalIsOpen(true);
  };

  const handleCloseEditEmployeeModal = () => {
    setEditEmployeeModalIsOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedRowData = rowData.map(emp => (emp.sno === selectedEmployee.sno ? selectedEmployee : emp));
    setRowData(updatedRowData);
    handleCloseEditEmployeeModal();
  };

  const handleDeleteClick = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteEmployeeModalIsOpen(true);
  };

  const handleDelete = (sno) => {
    setRowData(rowData.filter(emp => emp.sno !== sno));
    setDeleteEmployeeModalIsOpen(false);
  };

  const handleCloseDeleteEmployeeModal = () => {
    setDeleteEmployeeModalIsOpen(false);
  };

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Employee</h1>
          <br />
          <EmployeeCard/>
          <div className="mt-4 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Employee</h2>
            <button onClick={handleAddEmployee} className=" bg-pink-500 text-white px-4 py-2 rounded">
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Employee
            </button>
          </div>
          <EmployeeList columnDefs={columnDefs} rowData={rowData} handleToggle={handleToggle} />
        </div>
      </div>
      <AddEmployeeModal
        isOpen={addEmployeeModalIsOpen}
        onRequestClose={handleCloseAddEmployeeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newEmployee={newEmployee}
      />
      <EditEmployeeModal
        isOpen={editEmployeeModalIsOpen}
        onRequestClose={handleCloseEditEmployeeModal}
        handleChange={handleEditChange}
        handleSubmit={handleEditSubmit}
        employee={selectedEmployee}
      />
      <EmployeeDetailModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        employee={employeeDetail}
      />
      <DeleteEmployeeModal
        isOpen={deleteEmployeeModalIsOpen}
        onRequestClose={handleCloseDeleteEmployeeModal}
        handleDelete={handleDelete}
        employee={employeeToDelete}
      />
    </div>
  );
};

export default Employee;
