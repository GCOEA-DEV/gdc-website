import React from 'react';
import './Footer.css';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => (
  <footer>
    <div className="footer-links">
      <div>
        <a href="https://github.com/GCOEA-DEV">
          <GitHubIcon />
        </a>
      </div>
      <div>
        <a href="https://in.linkedin.com/in/gcoeadevclub">
          <LinkedInIcon />
        </a>
      </div>
      <div>
        <a href="https://slack.com/">
          <WorkIcon />
        </a>
      </div>
      <div>
        <a href="mailto:gcoeadevelopers@gmail.com">
          <MailIcon />
        </a>
      </div>
    </div>
    <div className="footer-copyright">
      Copyright 2020 &copy; Gcoea Developers Club
    </div>
  </footer>
);

export default Footer;
