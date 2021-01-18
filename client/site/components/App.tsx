import React, { useState } from 'react';
import styles from '../styles/app.css';
import AboutMe from './AboutMe';

const App = () => {
  const [showModal, toggleModal] = useState(false);

  const showProperModal = (toggleValue: boolean) => {
    toggleModal(toggleValue);
  };

  return (
    <>
      <div className={styles.mainView}>
        <h1 className={styles.welcomeMessage}>Hi, welcome to my site! 👾</h1>
        <div className={styles.quickLinks}>
          <button type="button" onClick={() => showProperModal(true)}>About Me</button>
          <button type="button">Projects</button>
          <button type="button">Blog</button>
          <button type="button">Media</button>
          {
            showModal ? (
              <AboutMe>
                <div className={styles.aboutMe}>
                  <div className={styles.modalInformation}>
                    <h1>Tre Moore</h1>
                    <button type="button" onClick={() => showProperModal(false)}>Close</button>
                  </div>
                </div>
              </AboutMe>
            ) : null
          }
        </div>
      </div>
      <div id="modal" />
    </>
  );
};

export default App;
