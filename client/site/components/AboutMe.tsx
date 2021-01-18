import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/app.css';

interface AboutMeProps {
  modalState: boolean,
  toggleModal: Function,
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
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
        <h1>Hi, I&apos;m Mitch! 👋</h1>
        <p>
          {` I think that one of the most important aspects of tackling challenges is to find a way or make one. I've developed a stick-to-itiveness from a young age when it came to software engineering, as I wanted to make video game mods when I was 11. In high school, I led a programming club that participated in hackathons and created applications for clients. For our apps, I was a project manager and we utilized php and MySql to create full stack apps. When I moved on from high school, I was involved as a full-stack engineer for applications that used technologies including TypeScript, React, Amazon Web Services, MongoDB, and a wide variety of others.
          When I'm not programming, I'm usually taking hikes outside or going for a run with some friends, or maybe even practicing guitar! I also enjoy  learning about political theory and philosophy, or just relaxing with a good video game.`}
        </p>
        <img src="./assets/selfImage.jpg" alt="Me, in front of the Missouri River" />
        <button type="button" onClick={() => showProperModal(false)}>X</button>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  modalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AboutMe;
