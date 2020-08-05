import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../context/GlobalState';

const Form = ({ type, submit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);

  const { setError } = useContext(GlobalContext);

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
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
      return;
    }
    // eslint-disable-next-line no-throw-literal
    throw 'Invalid email';
  };

  const validatePassword = (inputValue) => {
    if (inputValue.trim().length >= 8) {
      return;
    }
    // eslint-disable-next-line no-throw-literal
    throw 'Password must be at least 8 characters';
  };

  const validate = () => {
    try {
      const userDetails = {};

      if (type === 'Sign Up') {
        // eslint-disable-next-line no-throw-literal
        if (firstName === '') throw 'First name is required';
        // eslint-disable-next-line no-throw-literal
        if (lastName === '') throw 'Last name is required';

        userDetails.firstName = firstName;
        userDetails.lastName = lastName;
      }

      validateEmail(email);
      validatePassword(password);

      userDetails.email = email;
      userDetails.password = password;

      submit(userDetails);
    } catch (e) {
      setError(e, type);
    }
  };

  return (
    <>
      <h5>Using Expensave account</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="auth-form"
      >
        {type === 'Sign Up' ? (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </>
        ) : (
          ''
        )}
        <input
          type="email"
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
        {type === 'Log In' ? (
          <p className="accent forgot">
            <Link to="/forgot-password">Forgot Password</Link>
          </p>
        ) : (
          ''
        )}
        <button onClick={validate}>{type}</button>
      </form>
    </>
  );
};

export default Form;
