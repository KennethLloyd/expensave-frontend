import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../context/UserState';

const FacebookSignIn = () => {
  const { logInWithFacebook } = useContext(UserContext);

  const responseFacebook = ({ accessToken, first_name, last_name, email }) => {
    logInWithFacebook(accessToken, first_name, last_name, email);
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      fields="first_name,last_name,email"
      callback={responseFacebook}
      render={(renderProps) => (
        <button className="fb-btn" onClick={renderProps.onClick}>
          <FontAwesomeIcon icon={faFacebook} className="brand-icon" />
          Connect with Facebook
        </button>
      )}
    />
  );
};

export default FacebookSignIn;
