import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Sentiment Analysis</h3>
          <p>
            A sentiment analysis project that uses natural language processing to determine the sentiment of text data. This project can be used to analyze customer reviews, social media posts, and more.
          </p>
          <a href="https://github.com/VidhaPandey/sentiment-analysis" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>US Election 2020 Result Prediction</h3>
          <p>
            A machine learning project that predicts the results of the US 2020 election based on various factors. This project uses data analysis and machine learning algorithms to make predictions.
          </p>
          <a href="https://github.com/VidhaPandey/us-election-2020-result-prediction" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-item">
          <h3>Text Utils</h3>
          <p>
            A text utility application that provides various text manipulation features such as word count, character count, text transformation, and more. This project is built using React.
          </p>
          <a href="https://github.com/VidhaPandey/text-utils" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;