import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { FormGroup, Form, InputError } from '../styledComponents/form';
import { zoom } from '../styledComponents/animation';

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
			email: '',
			password: ''
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
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<Form>
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
		);
	}
}

export default Login;
