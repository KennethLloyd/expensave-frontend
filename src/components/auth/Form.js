import React, { useState, useContext } from 'react';
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
      validateEmail(email);
      validatePassword(password);

      submit(email, password);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      <h5>Using Expensave account</h5>
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
      {type === 'Log In' ? (
        <p className="accent forgot">Forgot Password</p>
      ) : (
        ''
      )}
      <button onClick={validate}>{type}</button>
    </>
  );
};

export default Form;
