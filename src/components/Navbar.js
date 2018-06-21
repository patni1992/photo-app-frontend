import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
	display: block;
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
`;

const Toggle = styled.div`
	width: 100%;
	padding: 10px 20px;
	background-color: gray;
	text-align: right;
	display: none;

	@media (max-width: 768px) {
		display: block;

		div {
			background-color: green;
			padding: 2000px;
		}
	}
`;

const Input = styled.input`float: right;`;

class Navbar extends Component {
	logout = data => {
		this.props.logoutUser();
	};

	renderNavbar() {
		if (this.props.auth.isAuthenticated) {
			return (
				<navbar>
					<Div>
						<Toggle>
							<FontAwesome
								style={{
									color: 'white',
									fontSize: '20px',
									zIndex: '200'
								}}
								name="trash"
							/>
						</Toggle>
						<Link to="/">
							<Linknav href="/">Home</Linknav>
						</Link>
						<Link to="/addphotos">
							<Linknav>Add Photos</Linknav>
						</Link>

						<Linknav
							onClick={this.logout}
							style={{ float: 'right' }}
						>
							Log out
						</Linknav>

						<Link
							style={{ float: 'right' }}
							to={`/profile/${this.props.auth.user.id}`}
						>
							<Linknav>{this.props.auth.user.username}</Linknav>
						</Link>
					</Div>
				</navbar>
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
