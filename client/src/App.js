import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from "./components/Backdrop";
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

        let sidedrawer, backdrop; 

        if (this.state.isDrawerOpen) {
            sidedrawer = <Sidedrawer />
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }

        return (
            <div className="App">
                <Navbar drawerToggleHandler={this.drawerToggleHandler} />
                { sidedrawer }
                { backdrop }
                <div className="main">
                    Welcome to Gcoea Developers Club 🚀
                </div>
            </div>
        );
    }
}

export default App;