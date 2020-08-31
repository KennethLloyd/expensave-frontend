import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CreateTransaction.scss';

const CreateTransaction = () => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState('');

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
                <input type="datetime-local" />
              </div>
              <div>
                <span>Name: </span>
                <input type="text" />
              </div>
              <div>
                <span>Amount: </span>
                <input type="number" />
              </div>
              <div className="trx-description">
                <span>Description: </span>
                <textarea></textarea>
              </div>
              <div>
                <span>Categories: </span>
                <select></select>
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
