import React from 'react';
import { Link } from 'react-router-dom';

import ThemeToggle from './ThemeToggle';
import './Sidedrawer.css';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeIcon from '@material-ui/icons/Code';
import GradeIcon from '@material-ui/icons/Grade';

const SideItem = (props) => {
  let { name, logo, link, drawerToggleHandler } = props;
  return (
    <li className="items">
      <Link to={link} className="items-link" onClick={drawerToggleHandler}>
        <div className="sideitem-logo">{logo}</div>
        <div>{name}</div>
      </Link>
    </li>
  );
};

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
        <SideItem
          name="Home"
          logo={<HomeIcon />}
          drawerToggleHandler={drawerToggleHandler}
          link="/"
        />

        <SideItem
          name="About"
          logo={<InfoIcon />}
          drawerToggleHandler={drawerToggleHandler}
          link="/about"
        />

        <SideItem
          name="Developers"
          logo={<LaptopMacIcon />}
          drawerToggleHandler={drawerToggleHandler}
          link="/developers"
        />

        <SideItem
          name="Projects"
          logo={<CodeIcon />}
          drawerToggleHandler={drawerToggleHandler}
          link="/projects"
        />

        <SideItem
          name="Join the Gang"
          logo={<GradeIcon />}
          drawerToggleHandler={drawerToggleHandler}
          link="/join"
        />

        <li className="spacer" />
        <li id="theme-toggle-div">
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Sidedrawer;
