import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const Container = styled.div`padding-top 20px; margin: 0 ;
`;

const Comment = styled.div`
	padding: 30px;
	margin-bottom: 15px;
	border-radius: 5px;
	border-bottom: 1.5px solid #d3d3d3;
	background-color: #ffffff;
`;

const CommentsBox = styled.div`
	margin-bottom: 20px;
	width: 100%;
`;

const DateText = styled.small`
	display: block;
	margin-bottom: 10px;
`;

class Comments extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<CommentsBox>
					{this.props.comments.map(comment => {
						console.log(comment);
						return (
							<Comment>
								<DateText>
									{' '}
									{moment(comment.createdAt).fromNow()}
								</DateText>
								{comment.text}
							</Comment>
						);
					})}
				</CommentsBox>
			</Container>
		);
	}
}

export default Comments;
