import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateTransaction.scss';
import { GlobalContext } from '../../context/GlobalState';

const CreateTransaction = () => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState('');
  const [datetime, setDatetime] = useState('');
  const [type, setType] = useState('Income');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { categories } = useContext(GlobalContext);

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
                    setDatetime(`${dateAndTime[0]} ${dateAndTime[1]}`);
                  }}
                />
              </div>
              <div>
                <span>Type: </span>
                <select
                  onChange={(e) => {
                    setType(e.target.value);
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
              <div>
                <span>Categories: </span>
                <select>
                  {categories.map((category) => {
                    if (type === category.transactionType) {
                      return (
                        <option key={category._id}>{category.name}</option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>
            <div className="create-trx-modal-content-footer">
              <button>Submit</button>
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
