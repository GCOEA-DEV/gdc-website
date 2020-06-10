import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <nav className="navbar">
        <div className="logo">
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt="logo"></img>
        </div>
        <div className="spacer" />
        <div className="menu-icon" onClick={props.drawerToggleHandler}>
            <i className="fa fa-bars"></i>
        </div>
    </nav>
);

export default Navbar;