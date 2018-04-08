import React, { Component } from 'react';
import Photo from './Photo';
import styled from 'styled-components';
import axios from 'axios';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class PhotoDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: '',
			description: '',
			tags: []
		};
	}

	componentDidMount() {
		axios
			.get(`/images/${this.props.match.params.id}`)
			.then((response) => {
				this.setState({
					src: 'http://localhost:5000/' + response.data.path,
					description: response.data.description,
					tags: response.data.tags
				});
			})
			.catch((error) => {
				return false; // add error method
			});
	}

	render() {
		return (
			<Styling>
				<Photo {...this.state} />
			</Styling>
		);
	}
}

export default PhotoDetail;
