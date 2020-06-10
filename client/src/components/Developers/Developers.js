import React, { Component } from 'react';
import Card from './Card';
import './Developers.css';

class Developers extends Component {
    state = {
        developers: []
    };

    componentDidMount() {
        fetch('/api/developers')
            .then(res => res.json())
            .then(developers => this.setState({ developers }))
            .catch(err => console.log(err)); 
    }

    render() {
        return (
            <div className="developers">
                <div className="cards-container">
                    <Card name="Pranjal Alone" />
                    <Card name="Nilay Ingle" />
                    <Card name="Vaibhav Butale" />
                </div>
                {/* <ul>
                    {
                        this.state.developers.map(developer => <li key={ developer.id }>{ developer.name }</li>)
                    }
                </ul> */}
            </div>
        );
    }    
}

export default Developers;