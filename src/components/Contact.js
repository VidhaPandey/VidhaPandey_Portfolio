import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through any of the following platforms:</p>
      <ul>
        <li>
          <a href="https://github.com/VidhaPandey" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-logo.png" alt="GitHub" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vidha-pandey-2881a61b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-logo.png" alt="LinkedIn" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/VidhaPandey/" target="_blank" rel="noopener noreferrer">
            <img src="/images/leetcode-logo.png" alt="LeetCode" />
            LeetCode
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;