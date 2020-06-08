import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from '../components';
import { Layout } from '../layout';

// Styles
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.Hero__Container}>
        <div className={styles.Hero__Image}></div>
        <div className={styles.Hero__Content}>
          <h1 className={styles.Hero__Content_Title}>Welcome to The Form</h1>
          <p className={styles.Hero__Content_Text}>A form of test...</p>
        </div>
      </div>
      <div className={styles.Intro__Container}>
        <div className={styles.Intro__Content}>
          <h2>Register to see Stuff</h2>
          <p>You will get to see some random generic user post and comments whom may or may not exist.</p>
        </div>
        <Button>
          <Link to="/register">Register Now</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default LandingPage;
