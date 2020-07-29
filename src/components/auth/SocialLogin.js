import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import GoogleSignIn from './GoogleSignIn';

const SocialLogin = () => {
  return (
    <div className="card-left">
      <h5>Via social networking accounts</h5>
      <GoogleSignIn />
      <button className="fb-btn">
        <FontAwesomeIcon icon={faFacebook} className="brand-icon" />
        Connect with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
