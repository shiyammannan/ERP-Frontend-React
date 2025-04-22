import React, { useState } from "react";
import Breadcrumbs from "./components/BreadCrumbs";
import Card from "./components/Card";
import StudentTable from "./components/StudentTable";
import "./css/StudentProfile.css";

const StudentProfile = () => {
  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Student Profile", link: "/studentprofile" },
  ];

  const handleToggle = (rowIndex) => {
    setRowData((prevRowData) => {
      const updatedData = [...prevRowData];
      updatedData[rowIndex].active = !updatedData[rowIndex].active;
      return updatedData;
    });
  };

  const [rowData, setRowData] = useState([
    { sno: "1", name: "John Doe", studentid: "1234567890", batch: "June", course: "Java", active: true },
    { sno: "2", name: "Jane Doe", studentid: "1234567891", batch: "August", course: "Full stack", active: false },
    // Add more student data as needed
  ]);

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Student Profile</h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card title="Total Students" value="2,000" />
            <Card title="Active Students" value="1,800" />
            <Card title="Inactive Students" value="150" />
            <Card title="Passed Out Students" value="50" />
          </div>
          <StudentTable rowData={rowData} handleToggle={handleToggle} />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
