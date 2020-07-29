import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const GoogleSignIn = () => {
  let auth = null;
  let googleUser = null;
  let idToken = null;
  const API_KEY = process.env.REACT_APP_GAPI;

  const onAuthChange = () => {
    googleUser = auth.currentUser.get();
    idToken = googleUser.getAuthResponse().id_token;
    console.log(idToken);
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: `${API_KEY}`,
        scope: 'email',
      });

      auth = window.gapi.auth2.getAuthInstance();
      auth.isSignedIn.listen(onAuthChange);
    });
  }, []);

  return (
    <button className="google-btn" onClick={onSignInClick}>
      <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
      Connect with Google
    </button>
  );
};

export default GoogleSignIn;
