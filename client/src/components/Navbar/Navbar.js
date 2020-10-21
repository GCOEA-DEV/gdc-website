import React from 'react';
import './Navbar.css';

import { Menu } from '../../icons/Icons';

const Navbar = (props) => (
  <nav className="navbar">
    <div className="logo">
      <a href="/">GDC</a>
    </div>
    <div className="spacer" />
    <div className="menu-icon" onClick={props.drawerToggleHandler}>
      <Menu />
    </div>
  </nav>
);

export default Navbar;
