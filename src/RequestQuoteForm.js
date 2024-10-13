import React, { useState } from 'react';
import './RequestQuoteForm.css';

const groceries = ['Onion', 'Brinjal', 'Carrot', 'Cabbage', 'Cucumber', 'Spinach'];

const RequestQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedGroceries: [],
    address: '',
  });

  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGroceryChange = (e, grocery) => {
    const quantity = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selectedGroceries: {
        ...prevData.selectedGroceries,
        [grocery]: quantity,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setErrorMessage('Please fill out all fields before submitting.');
      return;
    }

    // Construct email body
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Address: ${formData.address}
      Selected Groceries: ${JSON.stringify(formData.selectedGroceries, null, 2)}
    `;

    window.location.href = `mailto:727721euec182@skcet.ac.in?subject=Request for Quote&body=${encodeURIComponent(
      emailBody
    )}`;

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      selectedGroceries: [],
      address: '',
    });

    setErrorMessage(''); // Clear error message
  };

  return (
    <div>
      <button className="request-quote-btn" onClick={() => setShowForm(!showForm)}>
        Request Quote
      </button>

      {showForm && (
        <form className="quote-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Request a Quote</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Groceries (Quantity in Kilograms):
            {groceries.map((grocery) => (
              <div key={grocery} className="grocery-item">
                <label>{grocery}:</label>
                <input
                  type="number"
                  min="0"
                  placeholder="Quantity (kg)"
                  onChange={(e) => handleGroceryChange(e, grocery)}
                  className="quantity-input"
                />
              </div>
            ))}
          </label>
          <br />
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </label>
          <br />
          <button type="submit" className="submit-btn">
            Request Quote
          </button>
        </form>
      )}
    </div>
  );
};

export default RequestQuoteForm;
