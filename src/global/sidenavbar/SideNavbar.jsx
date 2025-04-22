import React, { useState } from "react";
import "./css/SideNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUser,
  faLayerGroup,
  faMoneyBillWave,
  faFileInvoiceDollar,
  faBook,
  faUsers,
  faExchangeAlt,
  faHome,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import NavItemWithText from './components/NavItemWithText';
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";

const SideNavbar = () => {
  const [is_expanded, setIs_expanded] = useState(true);

  const toggleNavbar = () => {
    setIs_expanded(!is_expanded);
  };

  const navItems = [
    { icon: faHome, text: "Home", to: "/" },
    { icon: faUserGraduate, text: "Admission", to: "/admission" },
    { icon: faUser, text: "Student Profile", to: "/studentprofile" },
    { icon: faLayerGroup, text: "Batches", to: "/batches" },
    { icon: faMoneyBillWave, text: "Fees", to: "/fees" },
    { icon: faFileInvoiceDollar, text: "Invoice", to: "/invoice" },
    { icon: faBook, text: "Courses", to: "/courses" },
    { icon: faUsers, text: "Employees", to: "/employee" },
    { icon: faExchangeAlt, text: "Transactions", to: "/transaction" },
    { icon: faCertificate, text: "Certificate", to: "/certificate" }
  ];

  return (
    <>
      {/* Side Navbar for Desktop */}
      <div
        className={`navbar side  top-0 left-0 h-full flex flex-col justify-between relative transition-width duration-500 ease-in-out overflow-hidden ${is_expanded ? 'w-64' : 'w-16'}`}
      >
        <div className={`flex flex-col space-y-4 mt-4 ${is_expanded ? "" : "items-center"}`}>
          {navItems.map((item, index) => (
            <NavItemWithText key={index} icon={item.icon} text={item.text} to={item.to} is_expanded={is_expanded} />
          ))}
        </div>
      </div>

      {/* Bottom Navbar for Mobile */}
      <div className="navbar bottom fixed bottom-0 left-0 right-0 flex justify-around items-center bg-violet-700">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item">
            <a href={item.to}>
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideNavbar;
