import React, { Component } from 'react';
import './Home.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';

class Home extends Component {
  render() {
    return (
      <div className="home">
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
            <a href="https://github.com/GCOEA-DEV">
              <GitHubIcon />
            </a>
            <a href="https://in.linkedin.com/">
              <LinkedInIcon style={{ fontSize: '28px' }} />
            </a>
            <a href="https://slack.com">
              <WorkIcon />
            </a>
            <a href="mailto:gcoeadevelopers@gmail.com">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
