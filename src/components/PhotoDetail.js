import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveEditImage } from '../redux/actions/activeEditImageActions';
import { postComment } from '../redux/actions/commentActions';
import Photo from './Photo';
import Comments from './Comments';
import styled from 'styled-components';
import axios from 'axios';
import { setTimeout } from 'timers';
import { Wrapper } from './styledComponents/ui';
import { Container } from 'react-grid-system';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

const TextArea = styled.input`
	padding: 35px;
	width: 100%;
	margin-bottom: 20px;
	margin-left: 0px;
	margin-right: 0px;
	border: 2px #d3d3d3 solid;
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

	addCommentHandler = event => {
		event.preventDefault();
		const comment = event.target.elements.comment;

		if (comment.value.trim()) {
			this.props.postComment(this.props.match.params.id, comment.value);
			comment.value = '';
		}
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
				<Container>
					<Wrapper>
						<Styling>
							<Photo {...newProps} />
							<div style={{ flexBasis: '100%' }}>
								<Comments
									comments={this.state.comments || []}
								/>
								<form
									onSubmit={this.addCommentHandler}
									action=""
								>
									<TextArea
										name="comment"
										type="text"
										placeholder="Enter a comment"
									/>
								</form>
							</div>
						</Styling>
					</Wrapper>
				</Container>
			);
		} else {
			return null;
		}
	}
}

export default connect(null, { setActiveEditImage, postComment })(PhotoDetail);
