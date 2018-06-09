import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/activeEditImageActions';
import Photo from './Photo';
import Comments from './Comments';
import styled from 'styled-components';
import axios from 'axios';
import { setTimeout } from 'timers';
import { Wrapper } from './styledComponents/ui';

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
				console.log('response');
				console.log(response);
				this.setState({
					src: window.location.origin + '/' + response.data.path,
					description: response.data.description,
					tags: response.data.tags,
					comments: response.data.comments,
					id: response.data._id,
					author: response.data.author
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
		if (this.state) {
			let newProps = Object.assign({}, this.state, {
				profileLink: `/profile/${this.state.author._id}`,
				deletePhoto: this.addDeletePhotoHandler,
				editPhoto: data => {
					this.props.setActiveEditImage(data);
					this.props.history.push('/addPhotos');
				}
			});

			return (
				<Wrapper>
					<Styling>
						<Photo {...newProps} />
						<div style={{ flexBasis: '100%' }}>
							<Comments
								postComment={this.addCommentHandler}
								comments={this.state.comments || []}
							/>
						</div>
					</Styling>
				</Wrapper>
			);
		} else {
			return null;
		}
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(PhotoDetail);
