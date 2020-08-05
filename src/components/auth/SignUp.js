import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import SocialLogin from './SocialLogin';
import Form from './Form';
import './Auth.scss';
import { UserContext } from '../../context/UserState';

const SignUp = () => {
  const { signUp } = useContext(UserContext);

  const handleSignUp = (userDetails) => {
    signUp(userDetails);
  };

  return (
    <div className="auth-container">
      <h1>Expensave</h1>
      <div className="auth-card">
        <h3>Sign Up</h3>
        <div className="auth-card-fields">
          <SocialLogin />
          <div className="auth-card-right">
            <Form type="Sign Up" submit={handleSignUp} />
            <Alert location="Sign Up" />
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
