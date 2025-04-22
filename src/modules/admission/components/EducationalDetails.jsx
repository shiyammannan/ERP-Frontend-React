import React from "react";

const degrees = [
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BSc)",
  "Bachelor of Commerce (BCom)",
  "Bachelor of Engineering (BE)",
  "Bachelor of Technology (BTech)",
  "Master of Arts (MA)",
  "Master of Science (MSc)",
  "Master of Commerce (MCom)",
  "Master of Business Administration (MBA)",
  "Master of Computer Applications (MCA)",
  // Add other degrees as necessary
];

const departments = [
  "Computer Science",
  "Electronics and Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Business Administration",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Economics",
  // Add other departments as necessary
];

const currentYears = [
  "2024-2025",
  "2023-2024",
  "2022-2023",
  "2021-2022",
  "2020-2021",
  // Add other current academic years as necessary
];

const passedOutYears = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  // Add other passed out years as necessary
];
const cgpa = [
  "10",
  "9",
  "8",
  "7",
  "6",
  // Add other passed out years as necessary
];

const EducationalDetails = () => (
  <form>
    <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
        <label htmlFor="sslcPercentage" className="block text-sm font-semibold mb-1">SSLC Percentage</label>
        <input type="text" id="sslcPercentage" placeholder="Enter SSLC percentage" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-7 w-full lg:w-1/2 pl-4">
        <label htmlFor="hscPercentage" className="block text-sm font-semibold mb-1">HSC Percentage</label>
        <input type="text" id="hscPercentage" placeholder="Enter HSC percentage" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
        <label htmlFor="diplomaPercentage" className="block text-sm font-semibold mb-1">Diploma Percentage</label>
        <input type="text" id="diplomaPercentage" placeholder="Enter diploma percentage" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-7 w-full lg:w-1/2 pl-4">
        <label htmlFor="institutionName" className="block text-sm font-semibold mb-1">Institution Name</label>
        <input type="text" id="institutionName" placeholder="Enter institution name" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
        <label htmlFor="degree" className="block text-sm font-semibold mb-1">Degree</label>
        <select id="degree" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="">Select degree</option>
          {degrees.map((degree, index) => (
            <option key={index} value={degree}>{degree}</option>
          ))}
        </select>
      </div>
      <div className="mb-7 w-full lg:w-1/2 pl-4">
        <label htmlFor="department" className="block text-sm font-semibold mb-1">Department</label>
        <select id="department" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="">Select department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>{department}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
        <label htmlFor="currentAcademicYear" className="block text-sm font-semibold mb-1">Current Academic Year</label>
        <select id="currentAcademicYear" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="">Select current academic year</option>
          {currentYears.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="mb-7 w-full lg:w-1/2 pl-4">
        <label htmlFor="passedOutYear" className="block text-sm font-semibold mb-1">Passed Out Year</label>
        <select id="passedOutYear" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="">Select passed out year</option>
          {passedOutYears.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
        <label htmlFor="currentCGPA" className="block text-sm font-semibold mb-1">Current CGPA</label>
        <select id="currentCGPA" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="">Select CGPA</option>
          {cgpa.map((cgpa, index) => (
            <option key={index} value={cgpa}>{cgpa}</option>
          ))}
        </select>
      </div>
    </div>
    {/* Add other input fields for educational details */}
  </form>
);

export default EducationalDetails;
