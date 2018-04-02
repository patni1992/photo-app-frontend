import React, { Component } from 'react';
import axios from 'axios';
import dummyData from '../dummyData';
import Photo from './Photo';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import Modal from './Modal';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: {
				src: null,
				description: null
			},
			images: [],
			filterOn: ''
		};
	}

	componentDidMount() {
		axios.get('/images').then((reponse) => {
			this.setState({
				images: reponse.data
			});
		});
	}

	setFilterValue = (value) => {
		this.setState({ filterOn: value });
	};

	setModal = (value) => {
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

	render() {
		return (
			<div>
				<Searchbar onChangeHandler={this.setFilterValue} />

				{this.state.modal.src ? (
					<Modal
						closeHandler={this.setModal}
						description={this.state.modal.description}
						src={this.state.modal.src}
					/>
				) : null}
				<Styling>
					{this.state.images
						.filter((data) => {
							return data.description.toLowerCase().indexOf(this.state.filterOn.toLowerCase()) !== -1;
						})
						.map((data) => (
							<Photo
								clickHandler={this.setModal}
								description={data.description}
								tags={data.tags}
								src={'http://localhost:5000/' + data.path}
							/>
						))}
				</Styling>
			</div>
		);
	}
}

export default Gallery;
