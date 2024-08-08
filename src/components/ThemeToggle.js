// src/components/ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        Toggle Dark/Light Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
