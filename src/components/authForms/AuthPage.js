import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupRequest } from '../../redux/actions/authActions';
import Login from './Login';
import Signup from './Signup';
import styled, { keyframes } from 'styled-components';
import {
	FormGroup,
	FormContainer,
	FormHeader,
	Form
} from '../styledComponents/form';

const Atag = styled.a`
	margin: 0 25px;
	padding: 0 20px;
	text-decoration: none;
	color: ${props => (props.active ? '#1cb94e' : '#666')};
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

const VerticalAlign = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

class AuthPage extends Component {
	constructor() {
		super();
		this.state = {
			login: true,
			signUp: false
		};
	}

	signup = data => {
		console.log('signup');
		this.props.signupRequest(data);
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
				{this.state.login ? <h1>Login</h1> : <h1>Signup</h1>}
				<VerticalAlign>
					{this.state.login ? (
						<Login />
					) : (
						<Signup
							errors={this.props.errors}
							signup={this.signup}
						/>
					)}
				</VerticalAlign>
			</FormContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, {
	signupRequest
})(AuthPage);
