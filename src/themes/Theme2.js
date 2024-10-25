// src/themes/Theme2.js
import React from 'react';

const Theme2 = ({ user }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <header style={{ background: '#4CAF50', color: 'white', padding: '10px', textAlign: 'center' }}>
        <h1>{user.name}</h1>
        <p>{user.title}</p>
      </header>
      <main>
        <h2>About</h2>
        <p>{user.about}</p>
        <h3>My Projects</h3>
        <ul>
          {user.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </main>
      <footer style={{ padding: '10px', backgroundColor: '#ddd' }}>
        <p>Reach out: {user.contact}</p>
      </footer>
    </div>
  );
};

export default Theme2;
