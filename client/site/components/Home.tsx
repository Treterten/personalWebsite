import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styles from '../styles/app.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Media from './Media';
import Modal from './Modal';

const Home = () => {
  const [showAboutMe, toggleAbout] = useState(false);
  const [showProjects, toggleProjects] = useState(false);
  const [showMedia, toggleMedia] = useState(false);

  return (
    <>
      <div className={styles.mainView}>
        <h1 className={styles.welcomeMessage}>Hi, welcome to my site! 👾</h1>
        <div className={styles.quickLinks}>
          <button type="button" onClick={() => toggleAbout(true)}>About Me</button>
          <button type="button" onClick={() => toggleProjects(true)}>Projects</button>
          {/* <Link to="/Blog">Blog</Link> */}
          <button type="button" onClick={() => toggleMedia(true)}>Media</button>
          {
            showAboutMe ? (
              <Modal>
                <AboutMe modalState={showAboutMe} toggleModal={toggleAbout} />
              </Modal>
            ) : null
          }
          {
            showProjects ? (
              <Modal>
                <Projects modalState={showProjects} toggleModal={toggleProjects} />
              </Modal>
            ) : null
          }
          {
            showMedia ? (
              <Modal>
                <Media modalState={showMedia} toggleModal={toggleMedia} />
              </Modal>
            ) : null
          }
        </div>
      </div>
      <div id="modal" />
    </>
  );
};

export default Home;
