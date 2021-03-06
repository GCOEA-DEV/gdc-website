import React, { Component } from 'react';

import Rocket from './Rocket';
import Footer from './Footer';
import Links from './Links';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Links />
        <div className="main">
          <Rocket />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
