import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../context/UserState';

const GoogleSignIn = () => {
  const { logInWithGoogle } = useContext(UserContext);

  const responseGoogleSuccess = (response) => {
    logInWithGoogle(response.tokenId);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GAPI}
      onSuccess={responseGoogleSuccess}
      render={(renderProps) => (
        <button className="google-btn" onClick={renderProps.onClick}>
          <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
          Connect with Google
        </button>
      )}
    />
  );
};

export default GoogleSignIn;
