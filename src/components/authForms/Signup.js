import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { FormGroup, Form } from "../styledComponents/form";
import { zoom } from "../styledComponents/animation";

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

  changeHandler = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.props.submit}>
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
    );
  }
}

export default Signup;
