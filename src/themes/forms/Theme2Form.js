// src/themes/forms/Theme2Form.js
import React from 'react';
import axios from 'axios';
import './Theme2Form.css'; // Import the CSS file

const Theme2Form = ({ user, handleInputChange }) => {
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('title', user.title);
    formData.append('education', user.education);
    formData.append('skills', user.skills.join(', '));
    formData.append('contact', user.contact);

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
      <h2>Edit Portfolio Details</h2>
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

        <button type="submit">Submit</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default Theme2Form;
