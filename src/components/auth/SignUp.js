import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import OAuth from './OAuth';
import './Auth.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);

  const { logIn } = useContext(UserContext);
  const { errorMessage, setError } = useContext(GlobalContext);

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setEyeIcon(faEye);
    } else {
      setPasswordType('password');
      setEyeIcon(faEyeSlash);
    }
  };

  const validateEmail = (inputValue) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
      return;
    }
    throw 'Invalid email';
  };

  const validatePassword = (inputValue) => {
    if (inputValue.trim().length >= 8) {
      return;
    }
    throw 'Password must be at least 8 characters';
  };

  const handleSignUp = () => {
    try {
      validateEmail(email);
      validatePassword(password);

      logIn({ email, password });
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="container">
      <h1>Expensave</h1>
      <div className="card">
        <h3>Sign Up</h3>
        <div className="card-fields">
          <OAuth />
          <div className="card-right">
            <h5>Using Expensave account</h5>
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
            <button onClick={handleSignUp}>Sign Up</button>
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
            <div className="redirect">
              <p>Already have an account?</p>&nbsp;
              <span className="accent">
                <Link to="/login">Log In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
