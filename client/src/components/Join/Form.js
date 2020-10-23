import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="form-div">
      <form action="/api/sendlink" method="POST">
        <div className="input-div">
          <label>Name</label>
        </div>
        <div className="input-div">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
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
          />
        </div>
        <div className="input-div">
          <input type="submit" value="Send Invite Link" />
        </div>
      </form>
    </div>
  );
}

export default Form;
