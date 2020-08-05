import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './ResetPassword.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const ForgotPassword = () => {
  const { forgotPassword } = useContext(UserContext);
  const { errorMessage } = useContext(GlobalContext);

  const handleForgotPassword = (userDetails) => {
    forgotPassword(userDetails);
  };

  return (
    <div className="container">
      <h1>Expensave</h1>
      <div className="card">
        <h3>Forgot Password</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="auth-form"
        >
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={handleForgotPassword}>Submit</button>
        </form>
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
  );
};

export default ForgotPassword;
