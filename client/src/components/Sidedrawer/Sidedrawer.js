import React from 'react';
import './Sidedrawer.css';

const Sidedrawer = props => {
    return (
        <div className="side-drawer">
            <div className="side-logo">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
            </div>
            <ul className="list">
                <li className="items">
                    <a href="/">
                        <i className="fa fa-home"></i>
                        <span>HOME</span>
                    </a> 
                </li>
            </ul>
        </div>
    );
}

export default Sidedrawer;