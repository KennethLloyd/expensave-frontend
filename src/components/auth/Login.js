import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="container">
      <h1>Expensave</h1>
      <div className="card">
        <h3>Log In</h3>
        <div className="card-fields">
          <div className="card-left">
            <h5>Via social networking accounts</h5>
            <button className="google-btn">Connect with Google</button>
            <button className="fb-btn">Connect with Facebook</button>
          </div>
          <div className="card-right">
            <h5>Using your own Expensave account</h5>
            <input type="text" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
            <p className="accent forgot">Forgot Password</p>
            <button>Log In</button>
            <p className="register">
              Don't have an account? <span className="accent">Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
