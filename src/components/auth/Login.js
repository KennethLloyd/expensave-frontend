import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from './SocialLogin';
import Form from './Form';
import './Auth.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const Login = () => {
  const { logIn } = useContext(UserContext);
  const { errorMessage, errorLocation } = useContext(GlobalContext);

  const handleLogIn = (userDetails) => {
    logIn(userDetails);
  };

  return (
    <div className="auth-container">
      <h1>Expensave</h1>
      <div className="auth-card">
        <h3>Log In</h3>
        <div className="auth-card-fields">
          <SocialLogin />
          <div className="auth-card-right">
            <Form type="Log In" submit={handleLogIn} />
            {errorMessage && errorLocation === 'Log In' ? (
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
              <p>Don't have an account?</p>&nbsp;
              <span className="accent">
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
