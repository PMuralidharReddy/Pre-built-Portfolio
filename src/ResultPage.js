import React from 'react';

function ResultPage({ selectedTheme, formData }) {
  if (!selectedTheme || !formData.name) {
    return <p>Please fill the form first.</p>;
  }

  return (
    <div>
      <h1>Result</h1>
      <h2>Selected Theme: {selectedTheme.name}</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Age:</strong> {formData.age}</p>
    </div>
  );
}

export default ResultPage;
