import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
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
            <button className="google-btn">
              <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
              Connect with Google
            </button>
            <button className="fb-btn">
              <FontAwesomeIcon icon={faFacebook} className="brand-icon" />
              Connect with Facebook
            </button>
          </div>
          <div className="card-right">
            <h5>Using your own Expensave account</h5>
            <input type="text" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
            <p className="accent forgot">Forgot Password</p>
            <button>Log In</button>
            <div className="register">
              <p>Don't have an account?</p>
              <span className="accent">Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
