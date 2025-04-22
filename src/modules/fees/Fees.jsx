import React from "react";
import Breadcrumbs from "./components/BreadCrumbs";
import Card from "./components/Card";
import StudentProfileTable from "./components/FeesTable";
import "./css/Fees.css";

const Fees = () => {
  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Fees", link: "/fees" },
  ];

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Fees</h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card title="Paid Fees" value="40" />
            <Card title="Pending Fees" value="30" />
          </div>
          <StudentProfileTable />
        </div>
      </div>
    </div>
  );
};

export default Fees;
