import React, { useState } from 'react';
import Theme1 from './themes/Theme1';
import Theme2 from './themes/Theme2';
import Theme1Form from './themes/forms/Theme1Form';
import Theme2Form from './themes/forms/Theme2Form';
import './App.css'; // Import the updated CSS

function App() {
  const [selectedTheme, setSelectedTheme] = useState(''); // Initial state is empty
  const [user, setUser] = useState({
    name: 'John Doe',
    title: 'Full Stack Developer',
    about: 'I am passionate about building web applications and learning new technologies.',
    projects: ['Portfolio Website', 'E-commerce App', 'Weather Forecast App'],
    contact: 'johndoe@example.com',
    education: 'B.Sc. in Computer Science from MIT',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
  });

  const handleThemeChange = (theme) => setSelectedTheme(theme); // Switch theme

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'projects' || name === 'skills') {
      setUser({ ...user, [name]: value.split(',').map(item => item.trim()) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const renderForm = () => {
    switch (selectedTheme) {
      case 'Theme1':
        return <Theme1Form user={user} handleInputChange={handleInputChange} />;
      case 'Theme2':
        return <Theme2Form user={user} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  const themes = [
    { name: 'Theme1', component: <Theme1 user={user} /> },
    { name: 'Theme2', component: <Theme2 user={user} /> },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Portfolio Theme Selection</h1>

      {/* Horizontal Scrollable Themes Section */}
      <div className="theme-scroll-container">
        {themes.map((theme, index) => (
          <div className="theme-card" key={index}>
            <div className="theme-preview">
              {theme.component} {/* Render theme preview */}
            </div>
            <button
              className="select-button"
              onClick={() => handleThemeChange(theme.name)}
            >
              Select {theme.name}
            </button>
          </div>
        ))}
      </div>

      {/* Render selected theme only if a theme is selected */}
      {selectedTheme && (
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Theme: {selectedTheme}</h2>
          <div>{themes.find(theme => theme.name === selectedTheme).component}</div>
          <h2>Edit Portfolio Details</h2>
          {renderForm()} {/* Dynamically render the appropriate form */}
        </div>
      )}
    </div>
  );
}

export default App;
