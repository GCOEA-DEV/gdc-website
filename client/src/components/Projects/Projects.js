import React, { Component } from 'react';

class Projects extends Component {

    state = {
        projects: null,
        loaderMessage: "Loading..."
    }

    componentDidMount = async () => {
        /**
         * Retrieve the projects from Github
         */
        const response = await fetch('https://api.github.com/users/GCOEA-DEV/repos');
        const projects = await response.json();
        if(response.status === 200) {
            this.setState({ projects });
        } else {
            this.setState({ loaderMessage: "Unable to retrive the projects. Try again" });
        }

    }

    render() {

        const { projects, loaderMessage } = this.state;

        return (
            <>
                <h1>Projects</h1>
                <div className="developers">
                    <div className="developers-header">
                    <h2>PROJECTS 📦</h2>
                    </div>
                    <div className="developers-table">
                        { projects === null ? <p>{ loaderMessage }</p> :
                        <table>
                            <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Language</th>
                            </tr>
                            </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr>
                                    <td><a target='_blank' href={project.html_url}>{project.name}</a></td>
                                    <td>{project.description}</td>
                                    <td>{project.language}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>   
                    }
                    </div>
                </div>                
            </>
        );
    }
}

export default Projects;