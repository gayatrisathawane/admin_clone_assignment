import React from 'react';
 import "./circle.css"

const CircularProgressBar = ({ progress, strokeWidth, sqSize }) => {
  // Calculate the radius of the progress bar
  const radius = (sqSize - strokeWidth) / 2;
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Calculate the progress offset
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={sqSize} height={sqSize} className="circular-progress">
      <circle
        className="circular-progress-background"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={sqSize / 2}
        cy={sqSize / 2}
      />
      <circle
        className="circular-progress-bar"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset: offset }}
        r={radius}
        cx={sqSize / 2}
        cy={sqSize / 2}
      />
      <text x="50%" y="50%" className="circular-progress-text">
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
