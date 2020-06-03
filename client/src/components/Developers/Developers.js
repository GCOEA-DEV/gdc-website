import React, { Component } from 'react';
import './Developers.css';

class Developers extends Component {
    constructor() {
        super();
        /*this.state = {
            developers: []
        };*/
    }

    /*componentDidMount() {
        fetch('/api/developers')
            .then(res => res.json())
            .then(developers => this.setState({ developers }))
            .catch(err => console.log(err)); 
    }*/

    render() {
        return (
            <div className="container">
                {/*<ul>
                    {
                        this.state.developers.map(developer => <li key={ developer.id }>{ developer.name }</li>)
                    }
                </ul>*/}
                <div className="row">
                    <h2 className="header">Our Developers</h2>
                </div>

                <br />
                <div className="row">
                    <div className="col">
                        <center>
                            <div className="boxed card">
                                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg?1"></img>
                                <div className="cbody">
                                    <div><h2 className="cardbody">Name: Pranjal Alone</h2></div>
                                    <div><h2 className="cardbody">Skills: Javascript, HTML/CSS, JAVA, Nodejs, React</h2></div>
                                    <div><h2 className="cardbody">Follow Here :</h2></div>
                                    <div className="sociallinks">
                                        <a href="https://www.google.com"><i className="fa fa-whatsapp"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-instagram"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-linkedin"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-github-square"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-google-plus"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <center>
                            <div className="boxed card">
                                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg?1"></img>
                                <div className="cbody">
                                    <div><h2 className="cardbody">Name: Nilay Ingle</h2></div>
                                    <div><h2 className="cardbody">Skills: Javascript, HTML/CSS, JAVA, Nodejs, React</h2></div>
                                    <div><h2 className="cardbody">Follow Here :</h2></div>
                                    <div className="sociallinks">
                                        <a href="https://www.google.com"><i className="fa fa-whatsapp"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-instagram"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-twitter"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-linkedin"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-github-square"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-google-plus"></i></a>
                                        <a href="https://www.google.com"><i className="fa fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        );
    }    
}

export default Developers;