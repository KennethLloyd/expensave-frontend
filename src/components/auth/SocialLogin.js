import React from 'react';
import Alert from '../Alert';
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';

const SocialLogin = () => {
  return (
    <div className="auth-card-left">
      <h5>Via social networking accounts</h5>
      <GoogleSignIn />
      <FacebookSignIn />
      <Alert location="Social" />
    </div>
  );
};

export default SocialLogin;
