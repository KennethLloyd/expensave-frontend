import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import OAuth from './OAuth';
import Form from './Form';
import './Auth.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const Login = () => {
  const { logIn } = useContext(UserContext);
  const { errorMessage } = useContext(GlobalContext);

  const handleLogIn = (email, password) => {
    logIn({ email, password });
  };

  return (
    <div className="container">
      <h1>Expensave</h1>
      <div className="card">
        <h3>Log In</h3>
        <div className="card-fields">
          <OAuth />
          <div className="card-right">
            <Form type="Log In" submit={handleLogIn} />
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
