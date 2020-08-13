import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h3>Expensave</h3>
      <div className="header-right">
        <FontAwesomeIcon
          icon={faWallet}
          className="header-wallet-icon"
          size="3x"
          color="white"
        />
        &nbsp;&nbsp;
        <div className="header-total">
          <p>Total</p>
          <h4>P 10,500.00</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
