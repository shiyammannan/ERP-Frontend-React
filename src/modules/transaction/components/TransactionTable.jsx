import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import "../css/TransactionTable.css"

const TransactionTable = ({ data }) => (
  <table className="styled-table" id="product-table-data">
    <TableHeader />
    <tbody>
      {data.map((row, index) => (
        <TableRow key={index} row={row} />
      ))}
      <tr className="footer">
        <td colSpan="3"></td>
        <td>1950.00</td>
        <td>457.50</td>
        <td>2407.50</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionTable;
