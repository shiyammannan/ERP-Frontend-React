import React from 'react';
import '../css/ViewInvoice.css';
import logo from '../../../img/bird.png'; // Add the path to your logo file

const ViewInvoice = ({ invoice, show, handleClose }) => {
  if (!show) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-modal">
      <div className="invoice-modal-content">
        <span className="invoice-close" onClick={handleClose}>&times;</span>
        <div className="invoice-header">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <button onClick={handlePrint} className="print-button">Print</button>
        </div>
        <div className="head">
          <div className="invoice-title">INVOICE</div>
        </div>
        <div className="invoice-details">
          <div className="left">
            <div className="off_name">
              <strong>VPS Codebuilders Private Limited</strong><br />
              EdTech and IT Solutions<br />
            </div>
            <div className="off_number">
              <strong>Office No:</strong> 0413-2253577 | Phone: 9083875377<br /><br />
            </div>
            <div className="mail">
              <strong>Email:</strong> contact@codebuilders.in<br />
            </div>
            <div className="office">
              <strong>Office Address:</strong> No. 48, Pavenadra Street, Mariamman Nagar, Mudaliarpet, Puducherry-605004<br />
            </div>
            <div className="cin">
              <strong>CIN:</strong> U62013PY2023PTC0091 <br />
            </div>
            <br />
            <div className="vendor">
              <strong>Krithika K</strong><br />
              Phone Number: 9486139313<br />
              Place of Supply: Puducherry<br />
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="right">
            <div className="status">
              <strong>Payment Status:</strong> Paid<br />
            </div>
            <br />
            <div className="invoice-number">
              <strong>Invoice #:</strong> {invoice.invoiceNumber}<br />
            </div>
            <br />
            <div className="date">
              <strong>Date:</strong> 23-12-2023<br />
            </div>
            <div className="next-due">
              <strong>Next Due Date:</strong> 01-01-2024<br />
            </div>
            <div className="created-by">
              <strong>Created By:</strong> Name Of the Staff<br />
            </div>
            <br />
            <div className="billing">
              <strong>Billing Address:</strong><br />
              No 48, Pavenadra Street, Mariamman Nagar, Mudaliarpet, Puducherry-605004<br />
            </div>
          </div>
        </div>
        <br />
        <div className="invoice-items">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Full Stack web Development course</td>
                <td>3000</td>
                <td>1</td>
                <td>3000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">GRAND TOTAL</td>
                <td>3000</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <br />
        <div className="invoice-amount">
          <strong>Amount in Words:</strong> Three Thousand One Hundred Rupees Only<br />
        </div>
        <div className="invoice-notes">
          <strong>Notes:</strong><br />
          Chosen Installment 10,000 in 3 instalments<br />
          1st month Installment 4000 paid through gpay<br />
          2nd month Installment 3000 paid through gpay<br />
        </div>
        <br />
        <div className="footer">
          <div className="invoice-details">
            <div className="left">
              <strong>Terms and Conditions:</strong><br />
              Accepted<br />
            </div>
            <div className="vertical-line"></div>
            <div className="right">
              <strong>Signature:</strong><br />
            </div>
          </div>
        </div>
        <div className="note">
          This is a system generated Invoice and does not require seal or signature.
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
