// src/themes/forms/Theme1Form.js
import React, { useState } from 'react';
import axios from 'axios';
import './Theme1Form.css'; // Import the CSS file

const Theme1Form = ({ user, handleInputChange }) => {
  const [cvFile, setCvFile] = useState(null); // State to store uploaded file

  // Handle file upload for resume/CV
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    setCvFile(file);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('title', user.title);
    formData.append('about', user.about);
    formData.append('projects', user.projects.join(', '));
    formData.append('contact', user.contact);
    if (cvFile) {
      formData.append('cv', cvFile);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Portfolio Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={user.title}
            onChange={handleInputChange}
          />
        </label>

        <label>
          About:
          <textarea
            name="about"
            value={user.about}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Projects (comma-separated):
          <input
            type="text"
            name="projects"
            value={user.projects.join(', ')}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Contact:
          <input
            type="email"
            name="contact"
            value={user.contact}
            onChange={handleInputChange}
          />
        </label>
        

        {/* File Upload Field for CV/Resume */}
        <label>
          Upload Resume/CV:
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
        </label>

        {/* Preview uploaded CV/Resume file */}
        {cvFile && (
          <div className="upload-preview">
            <p>Uploaded CV: {cvFile.name}</p>
            <a href={URL.createObjectURL(cvFile)} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </div>
        )}

        <button type="submit">Submit</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default Theme1Form;
