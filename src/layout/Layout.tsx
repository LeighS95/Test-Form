import React from 'react';

// Styles
import styles from './Layout.module.css';

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className={styles.Page__Wrapper}>{children}</div>;
};

export default Layout;
