import React, { Component } from 'react';
import './Developers.css';
import Card from './card.js';
import { DEV } from './devinfo';

class Developers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dev: DEV
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 className="header">Our Developers</h2>
                </div>
                
                <br />

                <div>
                    <Card dev={this.state.dev[0]}/>
                </div>
                
                <br />
                
                <div>
                    <Card dev={this.state.dev[1]}/>
                </div>
            </div>
        );
    }    
}

export default Developers;