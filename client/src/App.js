import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Developers from './components/Developers/Developers';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h2>Welcome to Gcoea Developers Website</h2>
          <nav>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/developers'}>Developers</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/developers' component={Developers} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
