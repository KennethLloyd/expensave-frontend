import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const [sideNav, setSideNav] = useState('closed');

  const toggle = () => {
    if (sideNav === 'closed') {
      document.getElementsByClassName('homepage')[0].style.gridTemplateColumns =
        '200px auto';
      document.getElementsByTagName('aside')[0].style.width = '200px';

      setSideNav('open');
    } else {
      document.getElementsByClassName('homepage')[0].style.gridTemplateColumns =
        '0 auto';
      document.getElementsByTagName('aside')[0].style.width = '0px';

      setSideNav('closed');
    }
  };

  return (
    <header>
      <div className="header-left">
        <FontAwesomeIcon
          icon={faBars}
          className="burger-icon"
          size="2x"
          onClick={toggle}
        />
        <h3>Expensave</h3>
      </div>
      <div className="header-right">
        <FontAwesomeIcon
          icon={faWallet}
          className="header-right-wallet"
          size="2x"
          color="white"
        />
        &nbsp;&nbsp;
        <div className="header-right-total">
          <p>Total</p>
          <h4>P 10,500.00</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
