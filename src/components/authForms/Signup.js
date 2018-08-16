import React, { Component } from "react";
import styled from "styled-components";
import { FormGroup, Form, InputError } from "../styledComponents/form";
import Button from "../common/Button";

const SpanError = styled.a`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Header = styled.h2`
  margin: 0;
`;

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
  }

  l;

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    const { errors } = this.props;
    return (
      <Form noValidate onSubmit={this.onSubmitHandler}>
        <Header>Sign up</Header>
        <FormGroup>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            placeholder="Email"
          />
          {errors.email && (
            <SpanError>
              <InputError>{errors.email}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            placeholder="Username"
          />
          {errors.username && (
            <SpanError>
              <InputError>{errors.username}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <input
            onChange={this.onChangeHandler}
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <SpanError>
              <InputError>{errors.password}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            onChange={this.onChangeHandler}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <SpanError>
              <InputError>{errors.confirmPassword}</InputError>
            </SpanError>
          )}
        </FormGroup>
        <FormGroup>
          <Button block kind="success">
            Sign Up
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Signup;
