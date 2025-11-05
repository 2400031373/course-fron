import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    table: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.table) {
      setMessage('All fields are required.');
    } else {
      setMessage(`Booking confirmed for ${formData.name} on ${formData.date} at table ${formData.table}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="table">Table Number:</label>
      <input id="table" name="table" type="number" value={formData.table} onChange={handleChange} required />

      <button type="submit">Book Table</button>
      <p role="alert">{message}</p>
    </form>
  );
}

export default BookingForm;
