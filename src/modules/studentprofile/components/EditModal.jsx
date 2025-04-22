import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../css/EditModal.css";

const EditStudentModal = ({ isOpen, onRequestClose, student, onSave }) => {
  const [formData, setFormData] = useState({ ...student });

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMentorForms = mentorForms.map((form, i) =>
      i === index ? { ...form, [name]: value } : form
    );
    setMentorForms(updatedMentorForms);
  };

  const handleSave = () => {
    // handle save logic here, like sending the data to an API
    console.log('Saving mentor details', mentorForms);
  };
  const [mentorForms, setMentorForms] = useState([
    {
      studentnumber: '',
      studentrelation: '',
      date: '',
      description: '',
    },
  ]);
  const handleAdd = () => {
    setMentorForms([
      ...mentorForms,
      {
        studentnumber: '',
        studentrelation: '',
        date: '',
        description: '',
      },
    ]);
  };
  const studentnumberoption = [
    "8943763298",
    "9329887873",
    "9879352875",
    // Add other options as necessary
  ];
  const studentrelationoption = [
    "Father",
    "Mother",
    "Student",
    // Add other options as necessary
  ];

  const howDidYouHearOptions = [
    "Friends or Family",
    "Social Media",
    "Search Engine",
    "Advertisement",
    "College/University",
    "Other",
    // Add other options as necessary
  ];
  
  const studentmentoroption = [
    "Shiyam",
    "Thiruvarasan",
    "Sathish",
    "Ajay"
    // Add other options as necessary
  ];
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Student"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 ReactModal__Overlay"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-full">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="editstudentdetails">Edit Student</h2>
        <h3 className="personalheading">Personal Details</h3> <br />
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="editlable">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Locality</label>
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">District</label>
            <input
              type="text"
              name="district"
              value={formData.dristrict}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Pin-Code</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Father Name</label>
            <input
              type="text"
              name="fathername"
              value={formData.fathername}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Father Number</label>
            <input
              type="text"
              name="fathernumber"
              value={formData.fathernumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Mother Name</label>
            <input
              type="text"
              name="mothername"
              value={formData.mothername}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Mother Number</label>
            <input
              type="text"
              name="mothernumber"
              value={formData.mothernumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="profilePic"
              className="block text-sm font-semibold mb-1"
            >
              Profile Pic
            </label>
            <input
              type="file"
              name="profilepic"
              value={formData.profilepic}
              onChange={handleChange}
              accept=".jpeg, .jpg, .png"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </form>
        <br />
        <h3 className="educationheading">Education Details</h3> <br />
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="editlable">SSLC Percentage</label>
            <input
              type="email"
              name="sslcpercentage"
              value={formData.sslcpercentage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">HSC Percentage</label>
            <input
              type="text"
              name="hscpercentage"
              value={formData.hscpercentage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Diploma Percentage</label>
            <input
              type="text"
              name="diplomapercentage"
              value={formData.diplomapercentage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Institution Name</label>
            <input
              type="text"
              name="institutionname"
              value={formData.institutionname}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Degree</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Current Academic Year</label>
            <input
              type="text"
              name="currentacademicyear"
              value={formData.currentacademicyear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Passed Out Year</label>
            <input
              type="text"
              name="passedoutyear"
              value={formData.passedoutyear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Current CGPA</label>
            <input
              type="text"
              name="currentcgpa"
              value={formData.currentcgpa}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </form>
        <br />
        <h3 className="educationheading">Other Details</h3> <br />
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="editlable">Date of Admission</label>
            <input
              type="text"
              name="dateofadmission"
              value={formData.dateofadmission}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">How Did You Hear About Us</label>
          <select 
            id="edithowDidYouHear" 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            {howDidYouHearOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          </div>
          <div>
            <label className="editlable">Course Name</label>
            <input
              type="text"
              name="coursename"
              value={formData.coursename}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Installment</label>
            <input
              type="text"
              name="installment"
              value={formData.installment}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div>
          <label className="editlable">Mentor</label>
            <select
              id="studentsmentor"
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Student Mentor </option>
              {studentmentoroption.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </form>
        <br />
        {/* mentordetails */}
        <h3 className="educationheading">Mentor Details</h3>
      <br />
      {mentorForms.map((form, index) => (
        <form key={index} className="grid grid-cols-2 gap-4">
          <div>
            <label className="editlable">Student Phone Number</label>
            <select
              id={`studentnumber-${index}`}
              name="studentnumber"
              value={form.studentnumber}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Student Number</option>
              {studentnumberoption.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="editlable">Student Relation</label>
            <select
              id={`studentrelation-${index}`}
              name="studentrelation"
              value={form.studentrelation}
              onChange={(e) => handleChange(index, e)}
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Student Relation</option>
              {studentrelationoption.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="editlable">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={(e) => handleChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="editlable">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={(e) => handleChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <br />
        </form>
      ))}
      <button
        onClick={handleAdd}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
      <br />
      <button
        onClick={handleSave}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
      </div>
    </Modal>
  );
};

export default EditStudentModal;
