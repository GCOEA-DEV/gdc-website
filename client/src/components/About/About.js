import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <center><h1 className="heading">ABOUT US</h1></center>
                <div className="body">
                    <h2 className="hd1">What is GCOEA Developers Club:</h2>
                    <p>GCOEA Developers Club is a group of students in Government College of Engineering, Amravati.</p>
                    <h2 className="hd2">Who we are:</h2>
                    <p>We are the students of Information Technology branch of 4th year.</p>
                    <h2 className="hd3">What matters to us:</h2>
                    <p>We created this club in order to gain some important technology related skills.</p>
                    <h2 className="hd4">What we do:</h2>
                    <p>We develops web applications using various web technology.</p>
                    <h2 className="hd5">How we do it:</h2>
                    <p>Our club consist of three developers and with the coordination among our developers we develop web applications.</p>
                </div>
            </div>
        );
    }
}

export default About;