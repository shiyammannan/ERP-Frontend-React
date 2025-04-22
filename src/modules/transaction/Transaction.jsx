import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../global/topnavbar/TopNavbar";
import TransactionTable from './components/TransactionTable';
import CardGroup from './components/CardGroup';
import "./css/Transaction.css"

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index !== 0 && (
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          )}
          <span>{item.title}</span>
        </React.Fragment>
      ))}
    </nav>
  );
};

const Transaction = () => {
  const [rowData, setRowData] = useState([
    {
      month: "January",
      date: "2024-01-05",
      invoiceNumber: "INV-001",
      subtotal: "500.00",
      gstAmount: "75.00",
      grandTotal: "575.00",
      isHighlighted: true,
      rowSpan: 2,
      additionalRows: [
        {
          date: "2024-01-12",
          invoiceNumber: "INV-002",
          subtotal: "800.00",
          gstAmount: "120.00",
          grandTotal: "920.00",
        },
      ],
    },
    {
      month: "February",
      date: "2024-02-08",
      invoiceNumber: "INV-003",
      subtotal: "600.00",
      gstAmount: "90.00",
      grandTotal: "690.00",
      isHighlighted: true,
      rowSpan: 3,
      additionalRows: [
        {
          date: "2024-02-15",
          invoiceNumber: "INV-004",
          subtotal: "750.00",
          gstAmount: "112.50",
          grandTotal: "862.50",
        },
        {
          date: "2024-02-25",
          invoiceNumber: "INV-005",
          subtotal: "400.00",
          gstAmount: "60.00",
          grandTotal: "460.00",
        },
      ],
    },
  ]);

  const breadcrumbs = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Transaction", link: "/Transaction" },
  ];

  return (
    <div className="home-container">
      <div className="container mx-auto mt-4">
        <div className="p-4 bg-gradient-to-r from-violet-50 to-violet-50 rounded shadow-md">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold">Transaction</h1>
          <br />
          <CardGroup />
          <div className="table-wrapper mt-4">
            <h2 className='transactiontitle' id="title">Income History</h2>
            <div id="income-expense-dropdown">
              <select id="year-select">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <TransactionTable data={rowData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
