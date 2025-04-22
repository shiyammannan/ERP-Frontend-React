import React, { useState } from 'react';
import Breadcrumbs from './components/BreadCrumbs';
import CourseCard from './components/CoursesSummary';
import CourseTable from './components/CoursesTable';
import AddCourseButton from './components/AddCoursesButton';
import AddCoursesModal from './components/AddCoursesModal';
import ViewCourseModal from './components/ViewCourses';
import EditCourseModal from './components/EditCourses';
import DeleteCourseModal from './components/DeleteCourses';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Add this state
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [rowData, setRowData] = useState([
    { sno: "1", coursename: "Java", courseid: "1234567890", duration: "3 Months", amount: "Rs.5000", noofstudents: "1000", status: true },
    { sno: "2", coursename: "Full stack", courseid: "1234567890", duration: "2 Months", amount: "Rs.10000", noofstudents: "2000", status: true },
  ]);

  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Courses", link: "/courses" },
  ];

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowViewModal = (course) => {
    setSelectedCourse(course);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setSelectedCourse(null);
  };

  const handleShowEditModal = (course) => {
    setSelectedCourse(course);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedCourse(null);
  };

  const handleShowDeleteModal = (course) => { // Add this function
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleSaveEdit = (updatedCourse) => {
    const updatedRowData = rowData.map((course) =>
      course.courseid === updatedCourse.courseid ? updatedCourse : course
    );
    setRowData(updatedRowData);
  };

  const handleToggle = (rowIndex) => {
    const updatedRowData = [...rowData];
    updatedRowData[rowIndex].status = !updatedRowData[rowIndex].status;
    setRowData(updatedRowData);
  };

  const handleDeleteCourse = () => {
    const updatedRowData = rowData.filter(course => course.courseid !== selectedCourse.courseid);
    setRowData(updatedRowData);
    handleCloseDeleteModal();
  };

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Courses</h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <CourseCard icon={faUsers} title="Total Courses" value="2,000" />
            <CourseCard icon={faUsers} title="Active Courses" value="1,800" />
            <CourseCard icon={faUsers} title="Inactive Courses" value="150" />
          </div>
          <div className="mt-4 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Course Table</h2>
            <AddCourseButton handleShowModal={handleShowAddModal} />
          </div>
          <AddCoursesModal show={showAddModal} handleClose={handleCloseAddModal} />
          <ViewCourseModal show={showViewModal} handleClose={handleCloseViewModal} course={selectedCourse} />
          <EditCourseModal show={showEditModal} handleClose={handleCloseEditModal} course={selectedCourse} handleSave={handleSaveEdit} />
          <DeleteCourseModal show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDeleteCourse} />
          <CourseTable 
            rowData={rowData} 
            handleToggle={handleToggle} 
            handleShowViewModal={handleShowViewModal} 
            handleShowEditModal={handleShowEditModal} 
            handleShowDeleteModal={handleShowDeleteModal} // Pass the delete modal handler
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
