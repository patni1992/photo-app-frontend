import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FormGroup, Form } from '../styledComponents/form';
import { zoom } from '../styledComponents/animation';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			username: '',
			password: '',
			confirmPassword: ''
		};
	}

	l;

	onChangeHandler = e => {
		console.log(e.target.name);
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmitHandler = e => {
		console.log(this.props);
		e.preventDefault();
		this.props.signup(this.state);
	};

	render() {
		return (
			<Form noValidate onSubmit={this.onSubmitHandler}>
				<FormGroup>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.onChangeHandler}
						placeholder="Email"
					/>
				</FormGroup>
				<FormGroup>
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.onChangeHandler}
						placeholder="Username"
					/>
				</FormGroup>
				<FormGroup>
					<input
						onChange={this.onChangeHandler}
						name="password"
						type="password"
						placeholder="Password"
					/>
				</FormGroup>
				<FormGroup>
					<input
						type="password"
						onChange={this.onChangeHandler}
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
