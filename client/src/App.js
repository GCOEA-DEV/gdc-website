import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from './components/Backdrop';
import Loader from './components/Loader';

import './App.css';

const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Developers = React.lazy(() => import('./components/Developers/Developers'));
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const Join = React.lazy(() => import('./components/Join/Join'));

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
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/developers" component={Developers} />
              <Route path="/projects" component={Projects} />
              <Route path="/join" component={Join} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
