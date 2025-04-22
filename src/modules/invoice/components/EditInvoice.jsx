import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/EditInvoice.css';

const EditInvoice = ({ show, handleClose, invoice }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companySubTitle: '',
    companyOfficeNumber: '',
    companyPhoneNumber: '',
    companyEmail: '',
    companyOfficeAddress: '',
    CIN: '',
    invoiceNumber: '',
    invoiceDate: '',
    customerName: '',
    customerMobileNumber: '',
    placeOfSupply: '',
    paymentStatus: '',
    nextDueDate: '',
    createdBy: '',
    billingAddress: '',
    note: '',
    items: [],
  });

  useEffect(() => {
    if (invoice) {
      setFormData(invoice);
    }
  }, [invoice]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, e) => {
    const newItems = formData.items.map((item, i) =>
      i === index ? { ...item, [e.target.name]: e.target.value } : item
    );
    setFormData({ ...formData, items: newItems });
  };

  const handleAddItem = () => {
    const newSlno = (formData.items?.length || 0) + 1;
    setFormData({
      ...formData,
      items: [
        ...(formData.items || []),
        { slno: newSlno, description: '', rate: '', qty: '', total: 0 },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  const calculateTotal = (index) => {
    const item = formData.items[index];
    return item.rate && item.qty ? item.rate * item.qty : 0;
  };

  const calculateGrandTotal = () => {
    return (formData.items || []).reduce((acc, item) => acc + (item.rate * item.qty || 0), 0);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="invoice_edit_modal-overlay">
      <div className="invoice_edit_modal-container">
        <div className="invoice_edit_modal-header">
          <h2 className='head'>Edit Invoice</h2>
          <button onClick={handleClose} className="modal-close-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <label>
              Company Name:
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </label>
            <label>
              Company Sub Title:
              <input type="text" name="companySubTitle" value={formData.companySubTitle} onChange={handleChange} required />
            </label>
            <label>
              Company Office Number:
              <input type="text" name="companyOfficeNumber" value={formData.companyOfficeNumber} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Company Phone Number:
              <input type="text" name="companyPhoneNumber" value={formData.companyPhoneNumber} onChange={handleChange} required />
            </label>
            <label>
              Company Email:
              <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} required />
            </label>
            <label>
              Company Office Address:
              <input type="text" name="companyOfficeAddress" value={formData.companyOfficeAddress} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              CIN:
              <input type="text" name="CIN" value={formData.CIN} onChange={handleChange} required />
            </label>
            <label>
              Invoice Number:
              <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} required />
            </label>
            <label>
              Invoice Date:
              <input type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Customer Name:
              <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
            </label>
            <label>
              Customer Mobile Number:
              <input type="text" name="customerMobileNumber" value={formData.customerMobileNumber} onChange={handleChange} required />
            </label>
            <label>
              Place of Supply:
              <input type="text" name="placeOfSupply" value={formData.placeOfSupply} onChange={handleChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Payment Status:
              <input type="text" name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} required />
            </label>
            <label>
              Next Due Date:
              <input type="date" name="nextDueDate" value={formData.nextDueDate} onChange={handleChange} required />
            </label>
            <label>
              Created By:
              <input type="text" name="createdBy" value={formData.createdBy} onChange={handleChange} required />
            </label>
          </div>
          <label>
            Billing Address:
            <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} required />
          </label>
          <label>
            Note:
            <textarea name="note" value={formData.note} onChange={handleChange} required />
          </label>
          <div className="items-section">
            <h3>Items</h3>
            {formData.items && formData.items.map((item, index) => (
              <div key={index} className="form-row">
                <label>
                  Slno:
                  <input
                    type="number"
                    name="slno"
                    value={item.slno}
                    readOnly
                  />
                </label>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, e)}
                    required
                  />
                </label>
                <label>
                  Rate:
                  <input
                    type="number"
                    name="rate"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, e)}
                    required
                  />
                </label>
                <label>
                  Qty:
                  <input
                    type="number"
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleItemChange(index, e)}
                    required
                  />
                </label>
                <label>
                  Total:
                  <input type="number" name="total" value={calculateTotal(index)} readOnly />
                </label>
              </div>
            ))}
            <button type="button" onClick={handleAddItem} className="add-item-button">
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
          </div>
          <div className="grand-total">
            <h3>Grand Total: {calculateGrandTotal()}</h3>
          </div>
          <button type="submit" className="modal-submit-buttons">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditInvoice;
