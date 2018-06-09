import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/activeEditImageActions';

const Form = styled.form`
	position: relative;
	max-width: 800px;
	background: #ffffff;
	margin: 0 auto;
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
			img: {},
			tags: '',
			description: ''
		};
	}

	componentWillUnmount() {
		this.props.setActiveEditImage({});
	}

	componentDidMount() {
		this.setState({
			tags: this.props.activeEditImage.tags,
			description: this.props.activeEditImage.description,
			id: this.props.activeEditImage.id,
			img: {
				preview: this.props.activeEditImage.src
			}
		});
	}

	onDrop = (acceptedFiles, rejectedFiles) => {
		this.setState({
			img: acceptedFiles[0]
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		let appendUrl = '';
		const bodyFormData = new FormData();
		bodyFormData.set('description', this.state.description);
		bodyFormData.set('tags', this.state.tags);
		bodyFormData.set('image', this.state.img);
		bodyFormData.set('id', this.state.id);

		let subitMethod = 'post';

		if (Object.keys(this.props.activeEditImage).length !== 0) {
			subitMethod = 'patch';
			appendUrl = '/' + this.props.activeEditImage.id;
		}

		axios
			[subitMethod]('/images' + appendUrl, bodyFormData)
			.then(response => this.props.history.push('/'))
			.catch(error => console.log(error));
	};

	handleTagsChange = event => {
		this.setState({
			tags: event.target.value
		});
	};

	handleDescChange = event => {
		this.setState({
			description: event.target.value
		});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleDescChange}
					name="description"
					value={this.state.description}
					placeholder="Description"
					type="text"
				/>
				<input
					name="tags"
					onChange={this.handleTagsChange}
					value={this.state.tags}
					placeholder="Tags (seperate with comma)"
					type="text"
				/>
				<Dropzone
					style={{
						background: 'white',
						border: '3px black dotted',
						padding: '40px',
						margin: '0 0 15px'
					}}
					onDrop={this.onDrop}
					accept="image/jpeg, image/png"
					multiple={false}
				>
					<p>
						Try dropping a file here, or click to select a file to
						upload.
					</p>
					<p>Only *.jpeg and *.png images will be accepted</p>
				</Dropzone>
				<Img src={this.state.img.preview} alt="" />
				<button> Post </button>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeEditImage: state.activeEditImage
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhotos);
