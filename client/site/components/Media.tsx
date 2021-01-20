/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from '../styles/app.css';

interface MediaProps {
  modalState: boolean,
  toggleModal: Function,
}

const Media: React.FC<MediaProps> = (props) => {
  const [classList, changeClassList] = useState([styles.media]);

  const { modalState, toggleModal } = props;

  const showProperModal = (toggleValue: boolean) => {
    if (modalState === true) {
      changeClassList([styles.mediaBye, styles.media]);
      setTimeout(() => {
        toggleModal(false);
      }, 200);
    } else {
      toggleModal(toggleValue);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={`${classList.join(' ')}`}>
        <a href="https://www.linkedin.com/in/mitch-tre-moore/"><AiFillLinkedin size={75} /></a>
        <a href="https://twitter.com/MitchMooreIII2"><AiFillTwitterCircle size={75} /></a>
        <button type="button" onClick={() => showProperModal(false)}>X</button>
      </div>
    </div>
  );
};

Media.propTypes = {
  modalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Media;
