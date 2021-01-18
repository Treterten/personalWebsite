import React, { useState } from 'react';
import styles from '../styles/app.css';
import AboutMe from './AboutMe';
import Modal from './Modal';

const App = () => {
  const [showModal, toggleModal] = useState(false);

  return (
    <>
      <div className={styles.mainView}>
        <h1 className={styles.welcomeMessage}>Hi, welcome to my site! 👾</h1>
        <div className={styles.quickLinks}>
          <button type="button" onClick={() => toggleModal(true)}>About Me</button>
          <button type="button">Projects</button>
          <button type="button">Blog</button>
          <button type="button">Media</button>
          {
            showModal ? (
              <Modal>
                <AboutMe modalState={showModal} toggleModal={toggleModal} />
              </Modal>
            ) : null
          }
        </div>
      </div>
      <div id="modal" />
    </>
  );
};

export default App;
