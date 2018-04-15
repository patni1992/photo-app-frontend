import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';
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
				console.log('this is the response');
				console.log(response);
				this.setState({
					src: 'http://localhost:5000/' + response.data.path,
					description: response.data.description,
					tags: response.data.tags,
					comments: response.data.comments
				});
			})
			.catch((error) => {
				return false; // add error method
			});
	}

	addCommentHandler = (comment) => {
		this.setState({
			comments: [ comment, ...this.state.comments ]
		});
	};

	render() {
		return (
			<Styling>
				<Photo {...this.state} />
				<div style={{ flexBasis: '100%' }}>
					<Comments postComment={this.addCommentHandler} comments={this.state.comments || []} />
				</div>
			</Styling>
		);
	}
}

export default PhotoDetail;
