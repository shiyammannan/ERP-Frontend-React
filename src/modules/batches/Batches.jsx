import React, { useState } from "react";
import Breadcrumbs from "./components/BreadCrumbs";
import Card from "./components/Card";
import BatchTable from "./components/BatchTable";
import AddBatchModal from "./components/AddBatchesModal";
import "./css/Batches.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Batches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [batches, setBatches] = useState([
    // Initial batch data can be placed here
  ]);

  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Batches", link: "/Batches" },
  ];

  const handleAddNewBatch = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveNewBatch = (newBatch) => {
    setBatches([...batches, newBatch]);
    setIsModalOpen(false);
  };

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Batches</h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card title="Total Batches" value="40" />
            <Card title="Active Batches" value="30" />
            <Card title="Inactive Batches" value="10" />
            <Card title="Passed-Out Batches" value="150" />
          </div>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-bold">Batch Table</h2>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleAddNewBatch}
            >
             <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Batch
            </button>
          </div>
          <BatchTable batches={batches} />
        </div>
      </div>
      <AddBatchModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onSave={handleSaveNewBatch} 
      />
    </div>
  );
};

export default Batches;
