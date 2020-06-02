import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from "./components/Backdrop";
import Home from './components/Home/Home';
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
            <div className="App">
                <Navbar drawerToggleHandler={this.drawerToggleHandler} />
                <Sidedrawer show={this.state.isDrawerOpen} />
                { backdrop }
                <Home />
            </div>
        );
    }
}

export default App;