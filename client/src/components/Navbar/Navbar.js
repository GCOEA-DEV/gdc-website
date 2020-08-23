import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <nav className="navbar">
        <div className="logo">
            <a href='/'>
                GDC
            </a>
        </div>
        <div className="spacer" />
        <div className="menu-icon" onClick={props.drawerToggleHandler}>
            <i className="fa fa-bars"></i>
        </div>
    </nav>
);

export default Navbar;