import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';

const Alert = ({ location }) => {
  const { alertType, alertMessage, alertLocation } = useContext(GlobalContext);

  return alertMessage && alertLocation === location ? (
    <div className={`${alertType}`}>
      <FontAwesomeIcon
        icon={alertType === 'error' ? faExclamationCircle : faCheckCircle}
        className={`${alertType}-icon`}
      />
      &nbsp;
      <p className={`${alertType}-msg`}>{alertMessage}</p>
    </div>
  ) : (
    ''
  );
};

export default Alert;
