import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss';

const SideNav = ({ activePage, setActivePage }) => {
  const isActive = (page) => {
    if (page === activePage) {
      return 'active';
    }
    return '';
  };

  return (
    <aside>
      <nav>
        <div
          className={`nav-item ${isActive('Dashboard')}`}
          onClick={() => setActivePage('Dashboard')}
        >
          <FontAwesomeIcon
            icon={faChartLine}
            className="nav-icon nav-icon-dashboard"
            size="2x"
          />
          <p>Dashboard</p>
        </div>
        <div
          className={`nav-item ${isActive('Transactions')}`}
          onClick={() => setActivePage('Transactions')}
        >
          <FontAwesomeIcon
            icon={faHandshake}
            className="nav-icon nav-icon-transactions"
            size="2x"
          />
          <p>Transactions</p>
        </div>
        <div
          className={`nav-item ${isActive('Savings')}`}
          onClick={() => setActivePage('Savings')}
        >
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
