import React, { Component } from 'react';

import Loader from '../Loader';

import './Projects.css';

class Projects extends Component {
  state = {
    projects: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/users/GCOEA-DEV/repos'
      );
      if (response.status === 200) {
        const projects = await response.json();
        // console.log(projects);
        this.setState({ projects: projects, isLoading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="projects">
        <h1>
          Projects{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Stars</th>
                <th>Forks</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map((project, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <a href={project.html_url}>{project.full_name}</a>
                    </td>
                    <td>{project.description}</td>
                    <td>{project.stargazers_count}</td>
                    <td>{project.forks}</td>
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

export default Projects;
