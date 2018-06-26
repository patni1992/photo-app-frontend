import React, { Component } from 'react';
import axios from 'axios';
import Photo from './Photo';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import Modal from './Modal';
import * as actions from '../redux/actions/imageActions';
import { Wrapper } from './styledComponents/ui';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: {
				src: null,
				description: null
			},
			filterOn: ''
		};
	}

	componentDidMount() {
		this.props.fetchImages();
	}

	setFilterValue = value => {
		this.setState({ filterOn: value });
	};

	setModal = value => {
		if (value) {
			this.setState({ modal: value });
		} else {
			this.setState({
				modal: {
					src: false,
					description: false
				}
			});
		}
	};

	renderImages() {
		const { images } = this.props;

		if (!images) {
			return null;
		}

		return Object.keys(images)
			.filter(data => {
				return (
					images[data].description
						.toLowerCase()
						.indexOf(this.state.filterOn.toLowerCase()) !== -1
				);
			})
			.map(data => {
				data = images[data];
				return (
					<Photo
						id={data._id}
						imgLink={`/photo/${data._id}`}
						profileLink={`/profile/${data.author._id}`}
						clickHandler={this.setModal}
						description={data.description}
						tags={data.tags}
						author={data.author}
						src={window.location.origin + '/' + data.path}
					/>
				);
			});
	}

	render() {
		return (
			<Container>
				<Searchbar onChangeHandler={this.setFilterValue} />

				{this.state.modal.src ? (
					<Modal
						closeHandler={this.setModal}
						description={this.state.modal.description}
						src={this.state.modal.src}
					/>
				) : null}
				<Styling>{this.renderImages()}</Styling>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		images: state.images.items
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
