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
            <p>HELLO PO</p>
          </div>
          <a href="#" className="close-overlay" onClick={closeModal} />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CreateTransaction;
