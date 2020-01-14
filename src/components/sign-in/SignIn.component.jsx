import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
import UniqueButton from '../unique-button/UniqueButton.component';
import './SignIn.styles.scss';

export default class SignIn extends Component {

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.target.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: [value]
    });
  };

  render() {
    const { state: { email, password }, handleSubmit, handleChange } = this;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your e-mail and password.</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <UniqueButton type="submit">Sign in</UniqueButton>
        </form>
      </div>
    );
  };
};
