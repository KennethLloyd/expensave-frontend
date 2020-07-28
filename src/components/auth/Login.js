import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faExclamationCircle,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);

  const { logIn } = useContext(UserContext);
  const { errorMessage } = useContext(GlobalContext);

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setEyeIcon(faEye);
    } else {
      setPasswordType('password');
      setEyeIcon(faEyeSlash);
    }
  };

  const handleLogIn = () => {
    logIn({ email, password });
  };

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
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="password-field">
              <input
                type={passwordType}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FontAwesomeIcon
                icon={eyeIcon}
                className="eye-icon"
                onClick={() => togglePasswordVisibility()}
              />
            </div>
            <p className="accent forgot">Forgot Password</p>
            <button onClick={handleLogIn}>Log In</button>
            {errorMessage ? (
              <div className="error">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="error-icon"
                />
                &nbsp;
                <p className="error-msg">{errorMessage}</p>
              </div>
            ) : (
              ''
            )}
            <div className="register">
              <p>Don't have an account?</p>&nbsp;
              <span className="accent">Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
