import React, { Component } from 'react';
import './Developers.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devdata : this.props.dev 
        }
    }

    render() {
        return(
            <div className="container1">
                <div className="row boxed">
                    <div>
                        <img src={this.state.devdata.image}></img>
                    </div>

                    <div>
                        <div><h2 className="cardbody">Name: {this.state.devdata.name}</h2></div>
                        <div><h2 className="cardbody">Skills: {this.state.devdata.skills}</h2></div>
                        <div><h2 className="cardbody">Follow Here :</h2></div>
                        <div className="sociallinks">
                            <a href={this.state.devdata.facebook} className="facebook" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href={this.state.devdata.instagram} className="insta" target="_blank"><i className="fa fa-instagram fa-lg"></i></a>
                            <a href={this.state.devdata.github} className="github" target="_blank"><i className="fa fa-github-square fa-lg"></i></a>
                            <a href={this.state.devdata.linkedin} className="linkedin" target="_blank"><i className="fa fa-linkedin fa-lg"></i></a>
                            <a href={this.state.devdata.gmail} className="googleplus" target="_blank"><i className="fa fa-google-plus fa-lg"></i></a>
                            <a href={this.state.devdata.youtube} className="youtube" target="_blank"><i className="fa fa-youtube fa-lg"></i></a>
                       </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;