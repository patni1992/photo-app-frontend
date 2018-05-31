import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../redux/actions/authActions';

const Linknav = styled.span`
	float: left;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
	cursor: pointer;
	&:hover {
		background-color: #ddd;
		color: black;
	}
	&:active {
		background-color: #4caf50;
		color: white;
	}
`;

const Div = styled.div`
	background-color: #333;
	overflow: hidden;
	margin-bottom: 60px;
	left: 0;
	right: 0;
	top: 0;
	z-index: 10;
	position: fixed;
`;

const Input = styled.input`float: right;`;

class Navbar extends Component {
	logout = data => {
		this.props.logoutUser();
	};

	renderNavbar() {
		if (this.props.auth.isAuthenticated) {
			return (
				<Div>
					<Link to="/">
						<Linknav href="/">Home</Linknav>
					</Link>
					<Link to="/addphotos">
						<Linknav>Add Photos</Linknav>
					</Link>

					<Linknav onClick={this.logout} style={{ float: 'right' }}>
						Log out
					</Linknav>

					<Link style={{ float: 'right' }} to="/profile">
						<Linknav>{this.props.auth.user.username}</Linknav>
					</Link>
				</Div>
			);
		} else {
			return null;
		}
	}
	render() {
		return this.renderNavbar();
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
