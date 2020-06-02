import React, { Component } from 'react';
import './Home.css';
import Particles from 'react-particles-js';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Particles
                    canvasClassName="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} 
                />
            </div>
        );
    }
}

export default Home;