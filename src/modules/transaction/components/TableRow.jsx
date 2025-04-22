import React from 'react';

const TableRow = ({ row }) => (
  <>
    <tr>
      <td rowSpan={row.rowSpan} className={row.isHighlighted ? "highlighted" : ""}>{row.month}</td>
      <td>{row.date}</td>
      <td>{row.invoiceNumber}</td>
      <td>{row.subtotal}</td>
      <td>{row.gstAmount}</td>
      <td>{row.grandTotal}</td>
    </tr>
    {row.additionalRows && row.additionalRows.map((additionalRow, index) => (
      <tr key={index}>
        <td>{additionalRow.date}</td>
        <td>{additionalRow.invoiceNumber}</td>
        <td>{additionalRow.subtotal}</td>
        <td>{additionalRow.gstAmount}</td>
        <td>{additionalRow.grandTotal}</td>
      </tr>
    ))}
  </>
);

export default TableRow;
