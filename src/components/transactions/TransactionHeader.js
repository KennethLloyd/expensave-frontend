import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { format, sub, add } from 'date-fns';
import './CreateTransaction';
import './TransactionHeader.scss';
import CreateTransaction from './CreateTransaction';
import { TransactionContext } from '../../context/TransactionState';

const TransactionHeader = () => {
  const [date, setDate] = useState(new Date());
  const { changeDateFilter } = useContext(TransactionContext);

  const changeDate = (operation) => {
    if (operation === 'add') {
      changeDateFilter(`${format(add(date, { months: 1 }), 'yyyy-MM')}-01`);
      setDate(add(date, { months: 1 }), 'MMMM');
    } else {
      changeDateFilter(`${format(sub(date, { months: 1 }), 'yyyy-MM')}-01`);
      setDate(sub(date, { months: 1 }), 'MMMM');
    }
  };

  return (
    <div className="transaction-header">
      <div className="transaction-header-date-select">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => changeDate('sub')}
        />
        <h3>{format(date, 'MMMM')}</h3>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => changeDate('add')}
        />
      </div>
      <div className="transaction-header-filter-group">
        <select>
          <option value="all">All transactions</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
        <input placeholder="Search" />
      </div>
      <div className="transaction-header-total">
        <div className="transaction-header-total-income">
          <p>Total Income</p>
          <h4>P 54,500.00</h4>
        </div>
        <div className="transaction-header-total-expenses">
          <p>Total Expenses</p>
          <h4>P 44,000.00</h4>
        </div>
      </div>
      <CreateTransaction />
    </div>
  );
};

export default TransactionHeader;
