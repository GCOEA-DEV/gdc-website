import React from 'react';
import { Link } from 'react-router-dom';
import './Sidedrawer.css';

const Sidedrawer = props => {

    let drawerClasses = 'side-drawer'

    if (props.show)
        drawerClasses = 'side-drawer open'

    return (
        <div className={drawerClasses}>
            <div className="side-logo">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"></img>
            </div>
            <ul className="list">
                <li className="items">
                    <Link to="/" className="items-link">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/about" className="items-link">
                        <i className="fa fa-info-circle"></i>
                        <span>About</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/developers" className="items-link">
                        <i className="fa fa-rocket"></i>
                        <span>Developers</span>
                    </Link> 
                </li>
            </ul>
        </div>
    );
}

export default Sidedrawer;