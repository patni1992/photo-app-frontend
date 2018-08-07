import React, { Component } from "react";
import styled from "styled-components";
import { FormGroup, Form, InputError } from "../styledComponents/form";
import Button from "../common/Button";

const ForgotPassword = styled.a`
  width: 50%;
  text-align: left;
  text-decoration: underline;
  color: #888;
  font-size: 0.75rem;
`;

const Header = styled.h2`
  margin: 0;
`;

const SpanError = styled.a`
  margin: 0;
  padding: 0;
  text-align: left;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  setLoginActive = () => {
    this.setState({
      login: true,
      signUp: false
    });
  };
  setSignupActive = () => {
    this.setState({
      login: false,
      signUp: true
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors } = this.props;
    return (
      <Form noValidate onSubmit={this.onSubmitHandler}>
        <Header>Login</Header>
        <FormGroup>
          <input
            onChange={this.changeHandler}
            value={this.state.username}
            type="text"
            name="username"
            placeholder="Username or email"
          />
          {errors.username && (
            <SpanError>
              <InputError>{errors.username}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <input
            onChange={this.changeHandler}
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <SpanError>
              <InputError>{errors.password}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <Button block kind="success">
            Log in
          </Button>
        </FormGroup>
        <FormGroup>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
