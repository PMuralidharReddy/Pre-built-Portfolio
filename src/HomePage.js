import React from 'react';
import { useNavigate } from 'react-router-dom';

const themes = [
  { id: 1, name: 'Theme 1', preview: 'Preview for Theme 1' },
  { id: 2, name: 'Theme 2', preview: 'Preview for Theme 2' },
  { id: 3, name: 'Theme 3', preview: 'Preview for Theme 3' },
];

function HomePage({ setSelectedTheme }) {
  const navigate = useNavigate();

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme); // Set the selected theme
    navigate('/form'); // Navigate to form page
  };

  return (
    <div>
      <h1>Select a Theme</h1>
      <div className="theme-scroll-container">
        {themes.map((theme) => (
          <div key={theme.id} className="theme-card" onClick={() => handleThemeSelect(theme)}>
            <h2>{theme.name}</h2>
            <div className="theme-preview">{theme.preview}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
