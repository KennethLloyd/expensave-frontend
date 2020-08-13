import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss';

const SideNav = () => {
  return (
    <aside>
      <div className="side-menu">
        <FontAwesomeIcon
          icon={faBars}
          className="side-menu-burger-icon"
          size="2x"
        />
      </div>
      <nav>
        <div className="nav-item nav-dashboard">
          <FontAwesomeIcon
            icon={faChartLine}
            className="nav-dashboard-icon"
            size="2x"
          />
          <p>Dashboard</p>
        </div>
        <div className="nav-item nav-transactions">
          <FontAwesomeIcon
            icon={faHandshake}
            className="nav-transactions-icon"
            size="2x"
          />
          <p>Transactions</p>
        </div>
        <div className="nav-item nav-savings">
          <FontAwesomeIcon
            icon={faPiggyBank}
            className="nav-savings-icon"
            size="2x"
          />
          <p>Savings</p>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
