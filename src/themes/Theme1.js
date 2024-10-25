// src/themes/Theme1.js
import React from 'react';
import './Theme1.css'; // You'll define styles here
import profileImage from './profile.png';

function Theme1({ user }) {
  return (
    <div className="theme1-container">
      {/* Header with Name and Navigation */}
      <header className="theme1-header">
        <h1>{user.name}</h1>
        <nav>
          <ul>
            <li>Bio</li>
            <li>Papers</li>
            <li>Talks</li>
            <li>News</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Teaching</li>
          </ul>
        </nav>
      </header>

      {/* Main Section with Profile and About Me */}
      <div className="theme1-main">
        {/* Profile Section */}
        <div className="theme1-profile">
          <img src="{profileImage}" alt={user.name} className="profile-img" />
          <h2>{user.name}</h2>
          <p>{user.title}</p>
          <p>{user.contact}</p>

          {/* Social Media Icons (Add links if needed) */}
          <div className="theme1-social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            {/* Add other icons similarly */}
          </div>
        </div>

        {/* About Me Section */}
        <div className="theme1-about">
          <h2>About Me</h2>
          <p>{user.about}</p>
          <button className="download-cv-btn">Download CV</button>

          <div className="theme1-details">
            <div>
              <h3>Interests</h3>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Computational Linguistics</li>
                <li>Information Retrieval</li>
                {/* You can add more dynamically */}
              </ul>
            </div>

            <div>
              <h3>Education</h3>
              <ul>
                <li>PhD Artificial Intelligence, Stanford University</li>
                <li>MEng Artificial Intelligence, MIT</li>
                <li>BSc Artificial Intelligence, MIT</li>
                {/* These can also be dynamic from user object */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme1;
