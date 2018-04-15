import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const Container = styled.div`padding-top 20px; max-width: 96%;
`;

const Comment = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	border: 1px solid #d3d3d3;
`;

const CommentsBox = styled.div`
	max-height: 250px;
	overflow: auto;
	margin-bottom: 20px;
	width: 100%;
`;

const TextArea = styled.input`
	padding: 25px;
	width: 100%;
	margin-bottom: 20px;
`;

const DateText = styled.small`
	display: block;
	margin-bottom: 10px;
`;

class Comments extends Component {
	constructor(props) {
		super(props);
	}

	onSubmitHandler = (event) => {
		event.preventDefault();
		const comment = event.target.elements.comment;

		if (comment.value.trim()) {
			this.props.postComment(comment.value);
			comment.value = '';
		}
	};

	render() {
		return (
			<Container>
				<CommentsBox>
					{this.props.comments.map((comment) => (
						<Comment>
							<DateText> {moment(comment.createdAt).fromNow()}</DateText>
							{comment.text}
						</Comment>
					))}
				</CommentsBox>
				<form onSubmit={this.onSubmitHandler} action="">
					<TextArea name="comment" type="text" placeholder="Enter a comment" />
				</form>
			</Container>
		);
	}
}

export default Comments;
