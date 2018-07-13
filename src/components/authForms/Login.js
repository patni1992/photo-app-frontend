import React, { Component } from "react";
import styled from "styled-components";
import { FormGroup, Form } from "../styledComponents/form";

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
    console.log("bajs");
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
        </FormGroup>
        <FormGroup>
          <input
            onChange={this.changeHandler}
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <button>Log in</button>
        </FormGroup>
        <FormGroup>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
