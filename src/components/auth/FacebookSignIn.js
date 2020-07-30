import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FacebookSignIn = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      callback={responseFacebook}
      render={(renderProps) => (
        <button className="fb-btn">
          <FontAwesomeIcon icon={faFacebook} className="brand-icon" />
          Connect with Facebook
        </button>
      )}
    />
  );
};

export default FacebookSignIn;
