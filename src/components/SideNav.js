import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss';

const SideNav = () => {
  return (
    <aside>
      <nav>
        <div className="nav-item nav-dashboard">
          <FontAwesomeIcon
            icon={faChartLine}
            className="nav-icon nav-icon-dashboard"
            size="2x"
          />
          <p>Dashboard</p>
        </div>
        <div className="nav-item nav-transactions">
          <FontAwesomeIcon
            icon={faHandshake}
            className="nav-icon nav-icon-transactions"
            size="2x"
          />
          <p>Transactions</p>
        </div>
        <div className="nav-item nav-savings">
          <FontAwesomeIcon
            icon={faPiggyBank}
            className="nav-icon nav-icon-savings"
            size="2x"
          />
          <p>Savings</p>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
