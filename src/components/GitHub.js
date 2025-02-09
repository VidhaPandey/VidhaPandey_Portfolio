import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../styles/Book.css';

function GitHub() {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // Fetch repositories
    fetch('https://api.github.com/users/VidhaPandey/repos')
      .then(response => response.json())
      .then(data => {
        const filteredRepos = data.filter(repo =>
          ['text-utils', 'sentiment-analysis', 'news-app', 'covid-chat-bot'].includes(repo.name)
        );
        setRepos(filteredRepos);
      });

    // Fetch commits
    fetch('https://api.github.com/search/commits?q=author:VidhaPandey', {
      headers: { 'Accept': 'application/vnd.github.cloak-preview' }
    })
      .then(response => response.json())
      .then(data => {
        const commitData = data.items.map(commit => ({
          date: commit.commit.author.date.split('T')[0],
          count: 1
        }));
        setCommits(commitData);
      })
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, []);

  return (
    <div className="book">
      <div className="book-content">
        <h2>GitHub Activity</h2>
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={commits}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${Math.min(value.count, 4)}`;
          }}
        />
        <h3>Repositories:</h3>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GitHub;