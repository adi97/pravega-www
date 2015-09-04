import React from 'react';

// TODO Add Captcha later
import '../styles/login.css';

class Login {
  render() {
    return (
      <div className="login-page">
        <div className="login-title">Login</div>
        <div className="username-padding">
          <input className="username" type="text" placeholder="Username"/>
        </div>
        <div>
          <input className="password" type="password" placeholder="Password"/>
        </div>
        <div className="forgot">Forgot Your Password ?</div>
        <div className="submit-button">Submit</div>
      </div>
    );
  }
}

export default Login;
