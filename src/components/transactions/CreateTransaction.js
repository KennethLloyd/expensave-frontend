import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateTransaction.scss';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionContext } from '../../context/TransactionState';

const CreateTransaction = () => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionType, setTransactionType] = useState('Income');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [thisCategories, setThisCategories] = useState([]);
  const { categories } = useContext(GlobalContext);
  const { createTransaction } = useContext(TransactionContext);

  const openModal = () => {
    if (!open) {
      setOpacity('open');
      setOpen(true);
    }
  };

  const closeModal = () => {
    if (open) {
      setOpacity('close');
      setOpen(false);
    }
  };

  const onCheckboxClick = (e) => {
    if (e.target.checked) {
      thisCategories.push(e.target.id);
    } else {
      const index = thisCategories.indexOf(e.target.id);
      thisCategories.splice(index, 1);
    }
    setThisCategories([...thisCategories]);
  };

  const submit = () => {
    const transaction = {
      transactionDate,
      transactionType,
      name,
      amount,
      description,
      categories: thisCategories,
    };

    createTransaction(transaction);

    closeModal();
  };

  return (
    <>
      <button className="transaction-header-create-btn" onClick={openModal}>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
      {open ? (
        <div className={`create-trx-modal ${opacity}`}>
          <div className="create-trx-modal-content">
            <div className="create-trx-modal-content-header">
              <h5>Create Transaction</h5>
              <a onClick={closeModal}>
                <strong>x</strong>
              </a>
            </div>
            <div className="create-trx-modal-content-body">
              <div>
                <span>Date and Time: </span>
                <input
                  type="datetime-local"
                  onChange={(e) => {
                    let dateAndTime = e.target.value.split('T');
                    setTransactionDate(`${dateAndTime[0]} ${dateAndTime[1]}`);
                  }}
                />
              </div>
              <div>
                <span>Type: </span>
                <select
                  onChange={(e) => {
                    setTransactionType(e.target.value);
                  }}
                >
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>
              <div>
                <span>Name: </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <span>Amount: </span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="trx-description">
                <span>Description: </span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="checkbox">
                <span>Categories: </span>
                <div className="checkbox-items">
                  {categories.map((category) => {
                    if (transactionType === category.transactionType) {
                      return (
                        <div key={category._id}>
                          <input
                            id={category._id}
                            type="checkbox"
                            value={category.name}
                            onClick={onCheckboxClick}
                          />
                          <label htmlFor={category._id}>{category.name}</label>
                        </div>
                      );
                    }
                  })}
                </div>
                {/* <select>
                  {categories.map((category) => {
                    if (transactionType === category.transactionType) {
                      return (
                        <option key={category._id}>{category.name}</option>
                      );
                    }
                  })}
                </select> */}
              </div>
            </div>
            <div className="create-trx-modal-content-footer">
              <button onClick={submit}>Submit</button>
            </div>
          </div>
          {/* <a className="close-overlay" onClick={closeModal} /> */}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CreateTransaction;
