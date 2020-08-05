import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './ResetPassword.scss';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useContext(UserContext);
  const { setError, errorMessage } = useContext(GlobalContext);

  const handleForgotPassword = (userDetails) => {
    forgotPassword(userDetails);
  };

  const validateEmail = (inputValue) => {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
      return;
    }
    // eslint-disable-next-line no-throw-literal
    throw 'Invalid email';
  };

  const validate = () => {
    try {
      const userDetails = {};

      validateEmail(email);

      userDetails.email = email;

      handleForgotPassword(userDetails);
    } catch (e) {
      setError(e);
    }
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
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button onClick={validate}>Submit</button>
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
