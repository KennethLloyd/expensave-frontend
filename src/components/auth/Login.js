import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import SocialLogin from './SocialLogin';
import Form from './Form';
import './Auth.scss';
import { UserContext } from '../../context/UserState';

const Login = () => {
  const { logIn } = useContext(UserContext);

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
            <Alert location="Log In" />
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
