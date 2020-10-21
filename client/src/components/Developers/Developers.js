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
      if (res.statusCode === 200) {
        let developers = await res.json();
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
              <tr>
                <td>Pranjal Alone</td>
                <td>Javascript, Reactjs, Python, Django, Flask, C++</td>
                <td>
                  <a href="https://github.com/ppalone">
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="https://github.com/ppalone">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Developers;
