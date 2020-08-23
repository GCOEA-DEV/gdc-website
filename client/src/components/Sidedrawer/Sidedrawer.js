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
                        <span><span role="img" aria-label="home">🏠</span> Home</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/about" className="items-link">
                        {/* <i className="fa fa-info-circle"></i> */}
                        <span><span role="img" aria-label="about">🤔</span> About</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/developers" className="items-link">
                        <span><span role="img" aria-label="developers">💻</span> Developers</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/projects" className="items-link">
                        <span><span role="img" aria-label="projects">🚀</span> Projects</span>
                    </Link> 
                </li>
                <li className="items">
                    <Link to="/join" className="items-link">
                        <span><span role="img" aria-label="join">⚡️</span> Join</span>
                    </Link> 
                </li>
            </ul>
        </div>
    );
}

export default Sidedrawer;