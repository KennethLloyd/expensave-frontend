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
      <button className="burger-menu">
        <FontAwesomeIcon icon={faBars} className="nav-dashboard-icon" />
      </button>
      <nav>
        <div className="nav-item nav-dashboard">
          <FontAwesomeIcon icon={faChartLine} className="nav-dashboard-icon" />
          <p>Dashboard</p>
        </div>
        <div className="nav-item nav-transactions">
          <FontAwesomeIcon
            icon={faHandshake}
            className="nav-transactions-icon"
          />
          <p>Transactions</p>
        </div>
        <div className="nav-item nav-savings">
          <FontAwesomeIcon icon={faPiggyBank} className="nav-savings-icon" />
          <p>Savings</p>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
