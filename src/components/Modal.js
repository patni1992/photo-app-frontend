import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

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

const Img = styled.img`
	margin: auto;
	display: block;
	width: 80%;
	max-width: 1200px;
	animation-name: ${zoom};
	animation-duration: 1.1s;
`;

const ModalContainer = styled.div`
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.9);
`;

const Close = styled.span`
	position: absolute;
	top: 15px;
	right: 35px;
	color: #f1f1f1;
	font-size: 40px;
	font-weight: bold;
	transition: 0.3s;
	&:hover {
		cursor: pointer;
	}
`;

class Modal extends Component {
	constructor(height, width) {
		super();
	}
	render() {
		return (
			<ModalContainer id="myModal" class="modal">
				<Close onClick={() => this.props.closeHandler(false)}>
					&times;
				</Close>
				<Img src={this.props.src} />
				<Caption>{this.props.description}</Caption>
			</ModalContainer>
		);
	}
}

export default Modal;
