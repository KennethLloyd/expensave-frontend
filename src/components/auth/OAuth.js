import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const OAuth = () => {
  return (
    <div className="card-left">
      <h5>Via social networking accounts</h5>
      <button className="google-btn">
        <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
        Connect with Google
      </button>
      <button className="fb-btn">
        <FontAwesomeIcon icon={faFacebook} className="brand-icon" />
        Connect with Facebook
      </button>
    </div>
  );
};

export default OAuth;
