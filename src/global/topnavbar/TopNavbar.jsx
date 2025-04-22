import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCog, faSignOutAlt, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/bird.png"; // Ensure the path is correctx
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFirmProfile = () => {
    navigate('/firmProfile'); // Use navigate for routing
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add logout logic here
  };

  const handleSwitchUser = () => {
    console.log("Switch user clicked");
    // Add switch user logic here
  };

  return (
    <div className="top-navbar flex justify-between items-center px-4 py-4 bg-gray-200 text-black">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-14 w-auto"
        />
      </div>
      <div className="flex items-center">
        {/* User account details */}
        <div className="flex items-center mr-4">
          <FontAwesomeIcon icon={faUserCircle} className="text-xl cursor-pointer" />
          <span className="ml-2 text-sm">shiyamdev</span>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faCog}
            className="text-xl cursor-pointer"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-violet-200 cursor-pointer"
                  onClick={handleFirmProfile}
                >
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                  Firm Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-violet-200 cursor-pointer"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </li>
                <li
                  className="px-4 py-2 hover:bg-violet-200 cursor-pointer"
                  onClick={handleSwitchUser}
                >
                  <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
                  Switch User
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
