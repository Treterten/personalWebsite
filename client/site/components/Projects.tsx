import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../styles/app.css';

interface ProjectProps {
  modalState: boolean,
  toggleModal: Function,
}

const Projects: React.FC<ProjectProps> = (props) => {
  const [classList, changeClassList] = useState([styles.projects]);
  const [repoList, setRepos] = useState([]);

  const { modalState, toggleModal } = props;

  const showProperModal = (toggleValue: boolean) => {
    if (modalState === true) {
      changeClassList([styles.projects, styles.projectsBye]);
      setTimeout(() => {
        toggleModal(false);
      }, 200);
    } else {
      toggleModal(toggleValue);
    }
  };

  useEffect(() => {
    axios.get('https://api.github.com/users/Treterten/repos')
      .then((results) => {
        setRepos(results.data);
        console.log(results.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.modal}>
      <div className={`${classList.join(' ')}`}>
        {
          repoList.map((repo) => {
            if (!repo.fork && !repo.archived) {
              return (<a href={repo.clone_url}>{repo.name}</a>);
            }
            return '';
          })
        }
        <button type="button" onClick={() => showProperModal(false)}>X</button>
      </div>
    </div>
  );
};

Projects.propTypes = {
  modalState: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Projects;
