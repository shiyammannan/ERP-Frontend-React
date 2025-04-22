import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavbar from "./global/sidenavbar/SideNavbar";
import TopNavbar from "./global/topnavbar/TopNavbar"; 
import HomePage from "./modules/dashboard/Home";
import AdmissionPage from "./modules/admission/AdmissionPage";
import StudentProfile from "./modules/studentprofile/StudentProfile";
import Batches from "./modules/batches/Batches";
import Fees from "./modules/fees/Fees";
import FirmProfile from "./modules/firmprofile/FirmProfile"
import Invoice from "./modules/invoice/Invoice";
import Transaction from "./modules/transaction/Transaction";
import Employee from "./modules/employee/Employee";
import Courses from "./modules/courses/Courses";
import Certificate from "./modules/certificate/Certificate";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="flex h-screen">
        <SideNavbar />
        <div className="flex flex-col w-full">
          <TopNavbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/admission" exact element={<AdmissionPage />} />
            <Route path="/studentprofile" exact element={<StudentProfile />} />
            <Route path="/batches" exact element={<Batches />} />
            <Route path="/fees" exact element={<Fees />} />
            <Route path="/invoice" exact element={<Invoice />} />
            <Route path="/transaction" exact element={<Transaction />} />
            <Route path="/employee" exact element={<Employee />} />
            <Route path="/courses" exact element={<Courses />} />
            <Route path="/settings" exact element={<Courses />} />
            <Route path="/firmprofile" exact element={<FirmProfile />} />
            <Route path="/certificate" exact element={<Certificate />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;