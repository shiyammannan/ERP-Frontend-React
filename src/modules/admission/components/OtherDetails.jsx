import React, { useState, useEffect } from "react";

const courses = [
  "Python",
  "Java",
  "MERN",
  "C++",
  "Data Science",
  "Machine Learning",
  // Add other courses as necessary
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
const mentoroption = [
  "Shiyam",
  "Thiruvarasan",
  "Sathish",
  "Ajay"
  // Add other options as necessary
];

const batches = [
  "Batch 1",
  "Batch 2",
  "Batch 3",
  "Batch 4",
  // Add other batches as necessary
];

const installmentOptions = [1, 2, 3]; // Options for installments

const OtherDetails = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [feesAmount, setFeesAmount] = useState("");
  const [numberOfInstallments, setNumberOfInstallments] = useState("");
  const [installmentAmount, setInstallmentAmount] = useState("");
  const [installmentsDetails, setInstallmentsDetails] = useState([]);

  useEffect(() => {
    if (feesAmount && numberOfInstallments) {
      const totalAmount = parseFloat(feesAmount);
      const installments = parseInt(numberOfInstallments);
      if (installments > 0) {
        setInstallmentAmount((totalAmount / installments).toFixed(2));
        // Generate installment details with due dates
        setInstallmentsDetails(
          Array.from({ length: installments }, (_, i) => ({
            amount: (totalAmount / installments).toFixed(2),
            dueDate: ""
          }))
        );
      }
    } else {
      setInstallmentAmount("");
      setInstallmentsDetails([]);
    }
  }, [feesAmount, numberOfInstallments]);

  const handleInstallmentDetailChange = (index, field, value) => {
    setInstallmentsDetails(prevDetails =>
      prevDetails.map((detail, i) =>
        i === index ? { ...detail, [field]: value } : detail
      )
    );
  };

  return (
    <form>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="dateOfAdmission" className="block text-sm font-semibold mb-1">Date of Admission</label>
          <input 
            type="date" 
            id="dateOfAdmission" 
            placeholder="Enter Date of Admission" 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
          />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="howDidYouHear" className="block text-sm font-semibold mb-1">How Did You Hear About Us</label>
          <select 
            id="howDidYouHear" 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            {howDidYouHearOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="courseName" className="block text-sm font-semibold mb-1">Course Name</label>
          <select 
            id="courseName" 
            value={selectedCourse} 
            onChange={(e) => setSelectedCourse(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="cbbatch" className="block text-sm font-semibold mb-1">Batch</label>
          <select 
            id="cbbatch" 
            value={selectedBatch} 
            onChange={(e) => setSelectedBatch(e.target.value)} 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a batch</option>
            {batches.map((batch, index) => (
              <option key={index} value={batch}>{batch}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
      <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="mentor" className="block text-sm font-semibold mb-1">Mentor</label>
          <select 
            id="mentor" 
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select your Mentor</option>
            {mentoroption.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        </div>
      {/* Conditionally render the fee fields based on selection */}
      {(selectedCourse || selectedBatch) && (
        <div className="flex flex-wrap w-full">
          <div className="mb-7 w-full lg:w-1/2 pr-4">
            <label htmlFor="feesAmount" className="block text-sm font-semibold mb-1">Fees Amount</label>
            <input 
              type="number" 
              id="feesAmount" 
              value={feesAmount} 
              onChange={(e) => setFeesAmount(e.target.value)} 
              placeholder="Enter Fees Amount" 
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
            />
          </div>
          <div className="mb-7 w-full lg:w-1/2 pl-4">
            <label htmlFor="numberOfInstallments" className="block text-sm font-semibold mb-1">Number of Installments</label>
            <select 
              id="numberOfInstallments" 
              value={numberOfInstallments} 
              onChange={(e) => setNumberOfInstallments(e.target.value)} 
              className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select installments</option>
              {installmentOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {installmentAmount && (
            <div className="mb-7 w-full">
              <label htmlFor="installmentAmount" className="block text-sm font-semibold mb-1">Amount per Installment</label>
              <input 
                type="text" 
                id="installmentAmount" 
                value={`$${installmentAmount}`} 
                readOnly 
                className="w-full px-3 py-2 border rounded-md placeholder-gray-400 bg-gray-100 cursor-not-allowed" 
              />
            </div>
          )}
          {/* Render installment details fields */}
          {installmentsDetails.map((detail, index) => (
            <div key={index} className="flex mb-7 w-full">
              <div className="w-1/2 pr-4">
                <label htmlFor={`installmentAmount${index}`} className="block text-sm font-semibold mb-1">Installment {index + 1} Amount</label>
                <input 
                  type="text" 
                  id={`installmentAmount${index}`} 
                  value={`$${detail.amount}`} 
                  readOnly 
                  className="w-full px-3 py-2 border rounded-md placeholder-gray-400 bg-gray-100 cursor-not-allowed" 
                />
              </div>
              <div className="w-1/2 pl-4">
                <label htmlFor={`dueDate${index}`} className="block text-sm font-semibold mb-1">Installment {index + 1} Due Date</label>
                <input 
                  type="date" 
                  id={`dueDate${index}`} 
                  value={detail.dueDate} 
                  onChange={(e) => handleInstallmentDetailChange(index, 'dueDate', e.target.value)} 
                  className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default OtherDetails;