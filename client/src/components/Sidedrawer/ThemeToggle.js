import React, { useState } from 'react';

import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    // console.log('Hey');
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="theme-toggle">
      <input type="checkbox" />
      <label className="switch" onClick={changeTheme}>
        <div>
          <span role="img" aria-label="moon">
            🌙
          </span>
        </div>
        <div>
          <span role="img" aria-label="sun">
            🌞
          </span>
        </div>
        <div className={`circle ${theme === 'dark' ? 'slide' : ''}`}></div>
      </label>
    </div>
  );
};

export default ThemeToggle;
