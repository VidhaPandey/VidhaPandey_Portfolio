import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../styles/Book.css';

function LeetCode() {
  const [submissions, setSubmissions] = useState([]);
  const [totalSubmissions, setTotalSubmissions] = useState(0);

  useEffect(() => {
    // Fetch LeetCode submissions
    fetch('https://leetcode-stats-api.herokuapp.com/VidhaPandey')
      .then(response => response.json())
      .then(data => {
        if (data.totalSolved && data.submissionCalendar) {
          const submissionData = Object.entries(data.submissionCalendar).map(([date, count]) => ({
            date,
            count: parseInt(count, 10),
          }));
          setSubmissions(submissionData);
          setTotalSubmissions(data.totalSolved);
        }
      })
      .catch(error => console.error('Error fetching LeetCode data:', error));
  }, []);

  return (
    <div className="book">
      <div className="book-content">
        <h2>LeetCode Activity</h2>
        <p>Total Submissions: {totalSubmissions}</p>
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={submissions}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${Math.min(value.count, 4)}`;
          }}
        />
      </div>
    </div>
  );
}

export default LeetCode;