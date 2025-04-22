import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../css/ViewModal.css";

Modal.setAppElement('#root');

const StudentProfileModal = ({ isOpen, onRequestClose, student }) => {
  if (!student) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Student Details"
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative overflow-y-auto max-h-full">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Student Details</h2>
        <div className="space-y-6">
          {/* Profile Image */}
          {student.profileImage && (
            <div className="flex justify-center mb-4">
              <img 
                src={student.profileImage} 
                alt={`${student.name}'s profile`} 
                className="rounded-full w-32 h-32 object-cover" 
              />
            </div>
          )}
          {/* Bio-data Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="break-words"><strong>First Name:</strong> {student.firstname}</p>
              <p className="break-words"><strong>Last Name:</strong> {student.lastname}</p>
              <p className="break-words"><strong>Phone Number:</strong> {student.phonenumber}</p>
              <p className="break-words"><strong>E-mail ID:</strong> {student.email}</p>
              <p className="break-words"><strong>Street:</strong> {student.street}</p>
              <p className="break-words"><strong>Locality:</strong> {student.locality}</p>
              <p className="break-words"><strong>State:</strong> {student.state}</p>
              <p className="break-words"><strong>District:</strong> {student.district}</p>
              <p className="break-words"><strong>City:</strong> {student.city}</p>
              <p className="break-words"><strong>Pin-code:</strong> {student.pincode}</p>
              <p className="break-words"><strong>Father Name:</strong> {student.fathername}</p>
              <p className="break-words"><strong>Father Number:</strong> {student.fathernumber}</p>
              <p className="break-words"><strong>Mother Name:</strong> {student.mothername}</p>
              <p className="break-words"><strong>Mother Number:</strong> {student.mothernumber}</p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Educational Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="break-words"><strong>SSLC Percentage</strong></p>
                <p className="break-words">{student.sslcpercentage}</p>
              </div>
              <div>
                <p className="break-words"><strong>HSC Percentage:</strong></p>
                <p className="break-words">{student.hscpercentage}</p>
              </div>
              <div>
                <p className="break-words"><strong>Diploma Percentage:</strong></p>
                <p className="break-words">{student.diplomapercentage}</p>
              </div>
              <div>
                <p className="break-words"><strong>Institution Name:</strong></p>
                <p className="break-words">{student.institutionname}</p>
              </div>
              <div>
                <p className="break-words"><strong>Degree</strong></p>
                <p className="break-words">{student.degree}</p>
              </div>
              <div>
                <p className="break-words"><strong>Department:</strong></p>
                <p className="break-words">{student.department}</p>
              </div>
              <div>
                <p className="break-words"><strong>Current Academic Year:</strong></p>
                <p className="break-words">{student.currentacademicyear}</p>
              </div>
              <div>
                <p className="break-words"><strong>Passed Out Year:</strong></p>
                <p className="break-words">{student.passedoutyear}</p>
              </div>
              <div>
                <p className="break-words"><strong>Current CGPA:</strong></p>
                <p className="break-words">{student.currentcgpa}</p>
              </div>
            </div>
          </div>

          {/* Other Details Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Other Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="break-words"><strong>Date of Admission:</strong></p>
                <p className="break-words">{student.dateofadmission}</p>
              </div>
              <div>
                <p className="break-words"><strong>How Did You Hear About Us:</strong></p>
                <p className="break-words">{student.hearaboutus}</p>
              </div>
              <div>
                <p className="break-words"><strong>Course Name:</strong></p>
                <p className="break-words">{student.coursename}</p>
              </div>
              <div>
                <p className="break-words"><strong>Installment:</strong></p>
                <p className="break-words">{student.installment}</p>
              </div>
              <div>
                <p className="break-words"><strong>Mentor:</strong></p>
                <p className="break-words">{student.mentor}</p>
              </div>
            </div>
          </div>
          {/* New Table Section */}
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-2">Mentor Details</h3>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-center">Sl. No</th>
                  <th className="border px-4 py-2 text-center">Student Relation</th>
                  <th className="border px-4 py-2 text-center">Student Phone Number</th>
                  <th className="border px-4 py-2 text-center">Date</th>
                  <th className="border px-4 py-2 text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                {student.mentorDetails && student.mentorDetails.map((detail, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{detail.studentRelation}</td>
                    <td className="border px-4 py-2">{detail.studentPhoneNumber}</td>
                    <td className="border px-4 py-2">{detail.date}</td>
                    <td className="border px-4 py-2">{detail.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StudentProfileModal;
