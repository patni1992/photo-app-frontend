import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/activeEditImageActions';
import Photo from './Photo';
import Comments from './Comments';
import styled from 'styled-components';
import axios from 'axios';
import { setTimeout } from 'timers';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class PhotoDetail extends Component {
	componentDidMount() {
		axios
			.get(`/images/${this.props.match.params.id}`)
			.then(response => {
				console.log('this is the response');
				console.log(response);
				this.setState({
					src: 'http://localhost:5000/' + response.data.path,
					description: response.data.description,
					tags: response.data.tags,
					comments: response.data.comments,
					id: response.data._id
				});
			})
			.catch(error => {
				return false; // add error method
			});
	}

	addDeletePhotoHandler = id => {
		axios
			.delete(`/images/${this.props.match.params.id}`)
			.then(response => {
				this.props.history.push('/');
			})
			.catch(error => {
				return false; // add error method
			});
	};

	addCommentHandler = comment => {
		axios
			.post(`/images/${this.props.match.params.id}/comments`, {
				text: comment
			})
			.then(response => {
				this.setState({
					comments: [ response.data, ...this.state.comments ]
				});
			})
			.catch(error => {
				console.log(error);
				return false; // add error method
			});
	};

	render() {
		let newProps = Object.assign({}, this.state, {
			deletePhoto: this.addDeletePhotoHandler,
			editPhoto: data => {
				this.props.setActiveEditImage(data);
				this.props.history.push('/addPhotos');
			}
		});
		return this.state ? (
			<Styling>
				<Photo {...newProps} />
				<div style={{ flexBasis: '100%' }}>
					<Comments
						postComment={this.addCommentHandler}
						comments={this.state.comments || []}
					/>
				</div>
			</Styling>
		) : null;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(PhotoDetail);
