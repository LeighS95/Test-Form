import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Field } from '../components';

// User JSON File (instead of DB Query)
import userLogin from '../loginDetails.json';

// Context
import { UserContext } from '../context/UserContext';

// Styles
import styles from './LoginForm.module.css';
import Alert from '../components/Alert';

// Components
import { Layout } from '../layout';

interface State {
  email: string;
  password: string;
  error: boolean;
}

const LoginForm: React.FC<State> = () => {
  const [state, setState] = useState<State>({
    email: '',
    password: '',
    error: false
  });

  // setUser Hook from UserContext
  const { user, setUser } = useContext(UserContext);

  // Update state on change which is passed to Filed Component
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      error: false,
      [e.currentTarget.name]: e.currentTarget.value
    } as {
      [K in keyof State]: State[K];
    });
  };

  // Validate and check user input & Submit
  const handleLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Variable to signify match
    let userFound;
    // Loop through users in json file to verify login details
    for (let user of userLogin) {
      if (state.email === user.email && state.password === user.password) {
        // userFound set to true to signify match found
        userFound = true;
        setUser({
          firstName: user.firstName,
          lastName: user.lastName,
          loggedIn: true
        });
        return;
      } else {
        userFound = false;
      }
    }
    // If userFound === false then user email &/or passwrod is incorrect or doesnt exist
    if (userFound === false) {
      setState({
        ...state,
        error: true
      });
    }
  };

  return (
    <Layout>
      <div className={styles.Form__Wrapper}>
        <h2 className={styles.Form__Title}>Login Form</h2>
        <form className={styles.Form__Container} onSubmit={handleLogin}>
          {state.error ? <Alert /> : null}
          <Field
            name="email"
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
            value={state.email}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={state.password}
          />
          <Button large submit>
            Login
          </Button>
        </form>
      </div>
      {user.loggedIn === true ? <Redirect to="/people" /> : null}
    </Layout>
  );
};

export default LoginForm;
