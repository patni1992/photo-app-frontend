import React, { Component } from 'react';

import styled from 'styled-components';

const Linknav = styled.a`
	float: left;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
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
	margin-bottom: 20px;
`;

const Input = styled.input`float: right;`;

class Navbar extends Component {
	render() {
		return (
			<Div>
				<Linknav class="active" href="#home">
					Home
				</Linknav>
				<Linknav href="#">Add Photos</Linknav>
				<Linknav href="#">Albums</Linknav>
			</Div>
		);
	}
}

export default Navbar;
