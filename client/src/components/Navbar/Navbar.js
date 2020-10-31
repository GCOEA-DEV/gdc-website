import React from 'react';
import './Navbar.css';

import MenuIcon from '@material-ui/icons/Menu';

const Navbar = (props) => (
  <nav className="navbar">
    <div className="logo">
      <a href="/">GDC</a>
    </div>
    <div className="spacer" />
    <div className="menu-icon" onClick={props.drawerToggleHandler}>
      <MenuIcon style={{ fontSize: '24px' }} />
    </div>
  </nav>
);

export default Navbar;
