import React, { Component } from "react";
import { connect } from "react-redux";
import { signupRequest } from "../redux/actions/authActions";
import styled, { keyframes } from "styled-components";
import {
  FormGroup,
  FormContainer,
  FormHeader,
  Form
} from "./styledComponents/form";
import { zoom } from "./styledComponents/animation";

const Atag = styled.a`
  margin: 0 25px;
  padding: 0 20px;
  text-decoration: none;
  color: ${props => (props.active ? "#1cb94e" : "#666")};
  font-weight: bold;
  outline: 0;
  font-size: 15px;
  transition: all 0.2s linear;
`;

const ForgotPassword = styled.a`
  width: 50%;
  text-align: left;
  text-decoration: underline;
  color: #888;
  font-size: 0.75rem;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      login: true,
      signUp: false
    };
  }

  l;

  submitHandler = e => {
    e.preventDefault();

    this.props
      .signupRequest(this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err.response.data));
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
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <FormContainer class="login-box">
        <FormHeader>
          <Atag
            active={this.state.login}
            href="#"
            onClick={this.setLoginActive}
          >
            Login
          </Atag>
          <Atag
            active={this.state.signUp}
            href="#"
            onClick={this.setSignupActive}
            href="#"
            id="signup-box-link"
          >
            Sign Up
          </Atag>
        </FormHeader>
        <Form hide={this.state.signUp}>
          <FormGroup>
            <input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <input type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <button>Log in</button>
          </FormGroup>
          <FormGroup>
            <ForgotPassword href="#">Forgot password?</ForgotPassword>
          </FormGroup>
        </Form>
        <Form onSubmit={this.submitHandler} hide={this.state.login}>
          <FormGroup>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <input
              onChange={this.changeHandler}
              name="password"
              type="password"
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="password"
              onChange={this.changeHandler}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </FormGroup>
          <FormGroup>
            <button>Sign Up</button>
          </FormGroup>
        </Form>
      </FormContainer>
    );
  }
}

export default connect(null, {
  signupRequest
})(Login);
