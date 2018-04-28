import React, { Component } from "react";

import styled, { keyframes } from "styled-components";

const LoginBox = styled.div`
  position: relative;
  margin: 10px auto;
  width: 500px;
  height: 380px;
  background-color: #fff;
  padding: 10px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
`;

const LbHeader = styled.div`
  position: relative;
  color: #00415d;
  margin: 5px 5px 10px 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  text-align: center;
  height: 28px;
`;

const zoom = keyframes`
    from {transform:scale(0)} 
    to {transform:scale(1)}
`;

const Caption = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
  animation-name: ${zoom};
  animation-duration: 1.1s;
`;

const Form = styled.form`
  position: relative;
  float: left;
  width: 100%;
  height: auto;
  margin-top: 20px;
  text-align: center;
  animation-name: ${zoom};
  animation-duration: 1.1s;
  display: ${props => (props.hide ? "none" : "block")};
`;

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

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 10px;

  & input {
    width: calc(50% - 22px);
    height: 45px;
    outline: none;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 2px;
    color: #333;
    font-size: 0.8rem;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    transition: all 0.1s linear;

    &:focus {
      border-color: #358efb;
    }
  }
  & button {
    width: 50%;
    background-color: #1cb94e;
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    padding: 14px 0;
    border-radius: 2px;
    text-transform: uppercase;
  }
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
      login: true,
      signUp: false
    };
  }

  l;

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

  render() {
    return (
      <LoginBox class="login-box">
        <LbHeader>
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
        </LbHeader>
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
        <Form hide={this.state.login}>
          <FormGroup>
            <input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <input type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <input type="password" placeholder="Confirm Password" />
          </FormGroup>
          <FormGroup>
            <button>Sign Up</button>
          </FormGroup>
        </Form>
      </LoginBox>
    );
  }
}

export default Login;
