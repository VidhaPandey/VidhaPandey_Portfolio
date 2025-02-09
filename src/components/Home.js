import React from 'react';
import '../styles/Home.css';
import Book from './Book';
import GitHub from './GitHub';
import LeetCode from './LeetCode';

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <h1>Hi, I am Vidha Pandey</h1>
        <p>Software Developer </p>
        <p>Welcome to my portfolio website. Here you can find information about my skills, projects, and how to contact me.</p>
      </div>
      <Book />
      <GitHub />
      <LeetCode />
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>Git & GitHub</li>
          <li>Jenkins</li>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
