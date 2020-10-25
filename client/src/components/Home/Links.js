import React from 'react';

import './Links.css';

// Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';

const SliderLink = (props) => {
  let { name, link, logo } = props;
  return (
    <div className="slider-link">
      <div className="slider-logo">
        <a href={link}>{logo}</a>
      </div>
      <div className="link">
        <a href={link}>{name}</a>
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="side-links">
      <SliderLink
        name="Github"
        link="https://github.com/GCOEA-DEV"
        logo={<GitHubIcon />}
      />
      <SliderLink
        name="LinkedIn"
        link="https://in.linkedin.com/in/gcoeadevclub"
        logo={<LinkedInIcon />}
      />
      <SliderLink name="Slack" link="https://slack.com/" logo={<WorkIcon />} />
      <SliderLink
        name="Gmail"
        link="mailto:gcoeadevelopers@gmail.com"
        logo={<MailIcon />}
      />
    </div>
  );
};

export default Links;
