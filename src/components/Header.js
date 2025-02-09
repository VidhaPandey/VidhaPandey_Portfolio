import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <div className="left-section">
        <h1>Vidha Pandey</h1>
        <div className="toggle-switch" onClick={toggleDarkMode}>
          <span>{isDarkMode ? '🌙' : '☀️'}</span>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
