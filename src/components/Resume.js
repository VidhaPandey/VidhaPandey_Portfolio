import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Click the button below to hire me:</p>
      <a href="/path/to/your-resume.pdf" download>
        <button className="hire-me-button">HIRE ME !!</button>
      </a>
    </section>
  );
}

export default Resume;