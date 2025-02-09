import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Vidha Pandey. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vidha-pandey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/vidhapandey" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/vidhapandey" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
