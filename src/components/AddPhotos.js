import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const Form = styled.form`
	position: relative;
	z-index: 1;
	background: #ffffff;
	max-width: 720px;
	margin: 0 auto 100px;
	padding: 45px;
	text-align: center;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
	& input {
		font-family: "Roboto", sans-serif;
		outline: 0;
		background: #f2f2f2;
		width: 100%;
		border: 0;
		margin: 0 0 15px;
		padding: 15px;
		box-sizing: border-box;
		font-size: 14px;
	}

	& button {
		font-family: "Roboto", sans-serif;
		text-transform: uppercase;
		outline: 0;
		background: #4caf50;
		width: 100%;
		border: 0;
		padding: 15px;
		color: #ffffff;
		font-size: 14px;
		-webkit-transition: all 0.3 ease;
		transition: all 0.3 ease;
		cursor: pointer;
	}
`;

const Img = styled.img`width: 100%;`;

class AddPhotos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: {}
		};
	}
	onDrop = (acceptedFiles, rejectedFiles) => {
		this.setState({
			img: acceptedFiles[0]
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const bodyFormData = new FormData();
		bodyFormData.append('description', event.target.elements.description.value);
		bodyFormData.append('tags', event.target.elements.tags.value);
		bodyFormData.append('image', this.state.img);

		axios
			.post('http://localhost:1337/images', bodyFormData)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<h2>Add a photo</h2>
				<Form onSubmit={this.handleSubmit}>
					<input name="description" placeholder="Description" type="text" />
					<input name="tags" placeholder="Tags (seperate with comma)" type="text" />
					<Dropzone
						style={{ background: 'white', border: '3px black dotted', padding: '80px', margin: '0 0 15px' }}
						onDrop={this.onDrop}
						accept="image/jpeg, image/png"
						multiple={false}
					>
						<p>Try dropping a file here, or click to select a file to upload.</p>
						<p>Only *.jpeg and *.png images will be accepted</p>
					</Dropzone>
					<Img src={this.state.img.preview} alt="" />
					<button> Post </button>
				</Form>
			</div>
		);
	}
}

export default AddPhotos;
