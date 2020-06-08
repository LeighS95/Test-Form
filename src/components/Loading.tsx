import React from 'react';

// Styles
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.Loading__Overlay}>
      <div className={styles.Loading__Container}>
        <div className={styles.Loading__Spinner}></div>
      </div>
    </div>
  );
};

export default Loading;
