import React, { Component } from 'react';
import './Form.css';

import CancelIcon from '@material-ui/icons/Cancel';

class Form extends Component {
  state = {
    name: '',
    email: '',
    loading: false,
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = async (e) => {
    // alert('Form submitted');
    // Prevent Refreshing of page
    e.preventDefault();

    // Submit the data
    try {
      this.setState({ loading: true });
      const res = await fetch('/api/mail', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
        }),
      });

      if (res.status === 200) {
        let data = await res.json();
        this.setState({
          loading: false,
          message: data.message,
          name: '',
          email: '',
        });
      } else {
        this.setState({ loading: false, message: 'Something went wrong :(' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  removeMessage = () => {
    this.setState({ message: '' });
  };

  render() {
    return (
      <div className="form-div">
        {this.state.message.trim() && (
          <div className="message">
            <div className="message-res">{this.state.message}</div>
            <div>
              <CancelIcon onClick={this.removeMessage} />
            </div>
          </div>
        )}
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
            <input
              type="submit"
              value={
                this.state.loading ? 'Submitting . . .' : 'Send Invite Link'
              }
              disabled={
                !this.state.name.trim() ||
                !this.state.email.trim() ||
                this.state.loading
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
