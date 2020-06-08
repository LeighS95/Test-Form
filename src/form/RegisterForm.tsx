import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Field } from '../components';

// User JSON File
import userDetails from '../loginDetails.json';

// Styles
import styles from './Register.module.css';
import Alert from '../components/Alert';

// Components
import { Layout } from '../layout';

// Yup schema (Validate user inputs)
let detailsSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class RegisterForm extends Component<State> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: {
      message: 'Already Exists',
      value: false
    },
    registered: false
  };

  // Onchange event to be passed to Field Component
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    } as {
      [K in keyof State]: State[K];
    });
    console.log(this.state);
  };

  // Validate and check users on Submit
  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate User Input against Yup schema
    detailsSchema
      .validate(this.state)
      .then(function (value) {
        console.log(value); // returns car object
      })
      .catch(function (err) {
        console.log(err);
      });
    // usersExists to change if user is found
    let userExists = false;
    // Loop through userDetails to find if user already exists
    for (let user of userDetails) {
      if (this.state.email === user.email) {
        userExists = true;
        this.setState({
          error: {
            message: 'Already Exists',
            value: true
          }
        });
      }
    }
    // If user does not exist then it can be added to array of users
    if (userExists === false) {
      userDetails.push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      });
      this.setState({
        registered: true
      });
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      error: { value, message },
      registered
    } = this.state;

    return (
      <Layout>
        <div className={styles.Form__Wrapper}>
          <h2 className={styles.Form__Title}>Register Form</h2>
          <form className={styles.Form__Container} onSubmit={this.handleSubmit}>
            {value === true ? <Alert message={message} /> : null}
            <Field
              name="firstName"
              label="First Name"
              placeholder="Enter First Name"
              onChange={this.handleChange}
              value={firstName}
            />
            <Field
              name="lastName"
              label="Last Name"
              placeholder="Enter Last Name"
              onChange={this.handleChange}
              value={lastName}
            />
            <Field
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter Email Address"
              onChange={this.handleChange}
              value={email}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              placeholder="Enter a Password"
              onChange={this.handleChange}
              value={password}
            />
            <Button submit>Register Now</Button>
          </form>
        </div>

        {registered ? <Redirect to="/login" /> : null}
      </Layout>
    );
  }
}

export default RegisterForm;
