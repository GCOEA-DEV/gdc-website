import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Params from '../particles.json';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Particles params={Params} />
        <div className="main">
          <div className="gdc-header">GDC</div>
          <div>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            WELCOME TO GCOEA DEVELOPERS CLUB{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </div>
          <div className="header-links">
            <a href="https://github.com/GCOEA-DEV">GitHub</a>
            <a href="https://in.linkedin.com/">LinkedIn</a>
            <a href="https://slack.com">Slack</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
