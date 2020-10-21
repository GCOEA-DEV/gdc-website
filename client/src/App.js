import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from './components/Backdrop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Developers from './components/Developers/Developers';
import Projects from './components/Projects/Projects';
import Join from './components/Join/Join';

import './App.css';

class App extends Component {
  state = {
    isDrawerOpen: false,
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return { isDrawerOpen: !prevState.isDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ isDrawerOpen: false });
  };

  render() {
    let { isDrawerOpen } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar drawerToggleHandler={this.drawerToggleHandler} />
          <Sidedrawer
            show={isDrawerOpen}
            drawerToggleHandler={this.drawerToggleHandler}
          />
          {isDrawerOpen && <Backdrop click={this.backdropClickHandler} />}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/developers" component={Developers} />
            <Route path="/projects" component={Projects} />
            <Route path="/join" component={Join} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
