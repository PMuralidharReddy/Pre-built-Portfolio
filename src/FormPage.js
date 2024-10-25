import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage({ selectedTheme, setFormData }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the form data
    setFormData({ name, age });
    // Navigate to result page
    navigate('/result');
  };

  if (!selectedTheme) {
    return <p>Please select a theme first.</p>; // If theme is not selected
  }

  return (
    <div>
      <h1>Fill the Form</h1>
      <h2>Selected Theme: {selectedTheme.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
