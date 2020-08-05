import React, { useState, useContext } from 'react';
import './ResetPassword.scss';
import Alert from '../Alert';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useContext(UserContext);
  const { setAlert } = useContext(GlobalContext);

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
      setAlert('error', e, 'Forgot Password');
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
        <Alert location="Forgot Password" />
      </div>
    </div>
  );
};

export default ForgotPassword;
