import React from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

import './Sidedrawer.css';

const Sidedrawer = (props) => {
  let { show, drawerToggleHandler } = props;

  return (
    <div className={`side-drawer ${show ? 'open' : ''}`}>
      <div className="side-logo">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="logo"
        ></img>
      </div>
      <ul className="list">
        <li className="items">
          <Link to="/" className="items-link" onClick={drawerToggleHandler}>
            <span>
              <span role="img" aria-label="home">
                🏠
              </span>{' '}
              Home
            </span>
          </Link>
        </li>
        <li className="items">
          <Link
            to="/about"
            className="items-link"
            onClick={drawerToggleHandler}
          >
            <span>
              <span role="img" aria-label="about">
                🤔
              </span>{' '}
              About
            </span>
          </Link>
        </li>
        <li className="items">
          <Link
            to="/developers"
            className="items-link"
            onClick={drawerToggleHandler}
          >
            <span>
              <span role="img" aria-label="developers">
                💻
              </span>{' '}
              Developers
            </span>
          </Link>
        </li>
        <li className="items">
          <Link
            to="/projects"
            className="items-link"
            onClick={drawerToggleHandler}
          >
            <span>
              <span role="img" aria-label="projects">
                🚀
              </span>{' '}
              Projects
            </span>
          </Link>
        </li>
        <li className="items">
          <Link to="/join" className="items-link" onClick={drawerToggleHandler}>
            <span>
              <span role="img" aria-label="join">
                ⚡️
              </span>{' '}
              Join
            </span>
          </Link>
        </li>
        <li className="spacer" />
        <li className="items" id="theme-toggle-div">
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Sidedrawer;
