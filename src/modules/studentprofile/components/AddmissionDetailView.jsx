import React from "react";
import PersonalDetails from "../../admission/components/PersonalDetails";
import OtherDetails from "../../admission/components/OtherDetails";
import EducationalDetails from "../../admission/components/EducationalDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const StudentViewModal = ({ student, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg w-full max-w-4xl relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2 className="text-xl font-bold mb-4">Student Details</h2>
      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
        <PersonalDetails student={student} />
        <EducationalDetails student={student} />
        <OtherDetails student={student} />
      </div>
    </div>
  </div>
);

export default StudentViewModal;
