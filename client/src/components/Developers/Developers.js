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
      <div className="developers-header">DEVELOPERS</div>
      {
        this.state.developers.map((developer, i) => <Card key={i} developer={developer} />)
      }
      </div>
    );
  }
}

export default Developers;
