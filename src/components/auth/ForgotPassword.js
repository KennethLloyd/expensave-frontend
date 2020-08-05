import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './ResetPassword.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useContext(UserContext);
  const { errorMessage } = useContext(GlobalContext);

  const handleForgotPassword = (userDetails) => {
    forgotPassword(userDetails);
  };

  return (
    <div className="reset-container">
      <h1>Expensave</h1>
      <div className="reset-card">
        <h3>Forgot Password</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="reset-form"
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
      </div>
    </div>
  );
};

export default ForgotPassword;
