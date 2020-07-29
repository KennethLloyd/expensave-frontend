import React, { useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../context/UserState';

const GoogleSignIn = () => {
  const { logInWithGoogle } = useContext(UserContext);
  const API_KEY = process.env.REACT_APP_GAPI;

  let auth = useRef(null);
  let googleUser = null;
  let idToken = null;

  const onAuthChange = async () => {
    googleUser = auth.current.currentUser.get();
    idToken = googleUser.getAuthResponse().id_token;

    await logInWithGoogle(idToken);
  };

  const onSignInClick = () => {
    auth.current.signIn();
  };

  //initialize google
  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: `${API_KEY}`,
        scope: 'email',
      });

      auth.current = window.gapi.auth2.getAuthInstance();
      auth.current.isSignedIn.listen(onAuthChange);
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
