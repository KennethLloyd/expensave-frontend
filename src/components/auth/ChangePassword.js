import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './ResetPassword.scss';
import Alert from '../Alert';
import { GlobalContext } from '../../context/GlobalState';
import { UserContext } from '../../context/UserState';

const ChangePassword = (props) => {
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(faEyeSlash);
  const { changePassword } = useContext(UserContext);
  const { setAlert } = useContext(GlobalContext);

  const handleChangePassword = (password) => {
    changePassword(props.match.params.resetToken, password);
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
      validatePassword(password);

      handleChangePassword(password);
    } catch (e) {
      setAlert('error', e, 'Change Password');
    }
  };

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setEyeIcon(faEye);
    } else {
      setPasswordType('password');
      setEyeIcon(faEyeSlash);
    }
  };

  return (
    <div className="reset-container">
      <h1>Expensave</h1>
      <div className="reset-card">
        <h3>Change Password</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="reset-form"
        >
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
          <button onClick={validate}>Submit</button>
        </form>
        <Alert location="Change Password" />
      </div>
    </div>
  );
};

export default ChangePassword;
