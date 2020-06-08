import React from 'react';

// Styles
import styles from './Alert.module.css';

interface Props {
  message?: string;
}

const Alert: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.Alert}>
      <p className={styles.Alert__Message}>{message}</p>
    </div>
  );
};

Alert.defaultProps = {
  message: 'Incorrect Email or Password'
};

export default Alert;
