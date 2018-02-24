import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div>Username:<input /></div>
          <div>Password<input /></div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
