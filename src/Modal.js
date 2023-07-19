import React from 'react';

const Modal = ({ joke, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Joke</h2>
        <p>{joke}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

