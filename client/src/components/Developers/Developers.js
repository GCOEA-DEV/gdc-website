import React, { Component } from 'react';

import Loader from '../Loader';

import './Developers.css';

class Developers extends Component {
  state = {
    developers: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let res = await fetch('/api/developers');
      if (res.status === 200) {
        const developers = await res.json();
        this.setState({ developers: developers, isLoading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="developers">
        <div className="developers-header">
          <h2>
            DEVELOPERS{' '}
            <span role="img" aria-label="nerd">
              🤓
            </span>
          </h2>
        </div>
        <div className="developers-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Skills</th>
                <th>Socials</th>
              </tr>
            </thead>
            <tbody>
              {this.state.developers.map((developer, idx) => {
                return (
                  <tr key={idx}>
                    <td>{developer.name}</td>
                    <td>{developer.skills.join(', ')}</td>
                    <td>
                      {developer.socials.linkedin && (
                        <a href={developer.socials.linkedin}>LinkedIn</a>
                      )}{' '}
                      {developer.socials.github && (
                        <a href={developer.socials.github}>Github</a>
                      )}{' '}
                      {developer.socials.website && (
                        <a href={developer.socials.website}>Website</a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Developers;
