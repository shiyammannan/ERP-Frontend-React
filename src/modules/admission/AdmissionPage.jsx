import React, { useState } from "react";
import "./css/AdmissionPage.css";
import PersonalDetails from "./components/PersonalDetails";
import EducationalDetails from "./components/EducationalDetails";
import OtherDetails from "./components/OtherDetails";
import ProgressBar from "./components/ProgressBar";

const AdmissionPage = () => {
  const [selectedTab, setSelectedTab] = useState("personal");
  const [heading, setHeading] = useState("Personal Details");

  const handleNext = () => {
    switch (selectedTab) {
      case "personal":
        setSelectedTab("educational");
        setHeading("Educational Details");
        break;
      case "educational":
        setSelectedTab("other");
        setHeading("Other Details");
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    switch (selectedTab) {
      case "educational":
        setSelectedTab("personal");
        setHeading("Personal Details");
        break;
      case "other":
        setSelectedTab("educational");
        setHeading("Educational Details");
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <h1 className="text-4xl font-bold">Admission Process</h1>
        <div className="mt-8">
          <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
            <ProgressBar selectedTab={selectedTab} />
            <br />
            <div className="tab-panel">
              {selectedTab === "personal" && <PersonalDetails />}
              {selectedTab === "educational" && <EducationalDetails />}
              {selectedTab === "other" && <OtherDetails />}
            </div>

            <div className="flex justify-between mt-8">
              {selectedTab !== "personal" && (
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-violet-600 text-white rounded-md"
                >
                  Previous
                </button>
              )}
              {selectedTab !== "other" && (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-pink-500 text-white rounded-md"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
