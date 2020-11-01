import React, { Component } from 'react';
import './Form.css';

import CancelIcon from '@material-ui/icons/Cancel';

class Form extends Component {

  state = {
    name: '',
    email: '',
    loading: false,
    message: ''
  }

  handleChange = (e) => {
    if (e.target.name === 'name') {
      this.setState({
        name: e.target.value
      })
    }
    if (e.target.name === 'email') {
      this.setState({
        email: e.target.value
      })
    }
  }

  handleFormSubmit = (e) => {
    // alert('Form submitted');
    // Prevent Refreshing of page
    e.preventDefault();

    this.setState({
      loading: true
    });

    setTimeout(() => {
      this.setState({
        name: '',
        email: '',
        loading: false,
        message: 'Your Response has been recorded!'
      });
    }, 3000);
  }

  removeMessage = () => {
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="form-div">
        {this.state.message.trim() && <div className='message'>
          <div>{this.state.message}</div>
          <div>
            <CancelIcon onClick={this.removeMessage} />
          </div>
        </div>}
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-div">
            <label>Name</label>
          </div>
          <div className="input-div">
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-div">
            <label>Email</label>
          </div>
          <div className="input-div">
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-div">
            <input type="submit" value={this.state.loading ? 'Submitting . . .' : 'Send Invite Link'} disabled={!this.state.name.trim() || !this.state.email.trim() || this.state.loading} />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
