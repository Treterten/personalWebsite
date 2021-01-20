import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/app.css';

interface MediaProps {
  modalState: boolean,
  toggleModal: Function,
}

const Media: React.FC<MediaProps> = (props) => {
  const [classList, changeClassList] = useState([styles.aboutMe]);

  const { modalState, toggleModal } = props;

  const showProperModal = (toggleValue: boolean) => {
    if (modalState === true) {
      changeClassList([styles.aboutMeBye, styles.aboutMe]);
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
