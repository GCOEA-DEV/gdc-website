import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from "./components/Backdrop";
import Home from './components/Home/Home';
import About from './components/About/About';
import Developers from './components/Developers/Developers';
import Params from './components/particles.json';
import './App.css';

class App extends Component {
    state = {
        isDrawerOpen: false
    };

    drawerToggleHandler = () => {
        this.setState(prevState => {
            return { isDrawerOpen: !prevState.isDrawerOpen };
        });
    }

    backdropClickHandler = () => {
        this.setState({ isDrawerOpen: false });
    };

    render() {

        let backdrop; 

        if (this.state.isDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <BrowserRouter>
                <div className="App">
                    <Particles params={ Params } />
                    <Navbar drawerToggleHandler={this.drawerToggleHandler} />
                    <Sidedrawer show={this.state.isDrawerOpen} />
                    { backdrop }
                    
                    <Switch>
                        <Route path="/" component={ Home } exact />
                        <Route path="/about" component={ About } />
                        <Route path="/developers" component={ Developers } />
                    </Switch>

                </div>
            </BrowserRouter>
            
        );
    }
}

export default App;