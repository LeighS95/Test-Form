import React from 'react';

// Styles
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__Text}>Created by Stephen Leigh</p>
    </footer>
  );
};

export default Footer;
