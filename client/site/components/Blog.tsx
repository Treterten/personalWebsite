import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/app.css';

const Blog = () => (
  <>
    <div className={styles.mainView}>
      <h1 className={styles.welcomeMessage}>Hi, welcome to my Blog! 👾</h1>
      <Link to="/" id={styles.backButton}>&lt;</Link>
    </div>
  </>
);

export default Blog;
