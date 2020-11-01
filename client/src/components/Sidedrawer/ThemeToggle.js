import React, { useState, Fragment, useEffect } from 'react';

import Helmet from 'react-helmet';

import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('theme')) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Fragment>
      <Helmet>
        <body className={theme}></body>
      </Helmet>
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
    </Fragment>
  );
};

export default ThemeToggle;
