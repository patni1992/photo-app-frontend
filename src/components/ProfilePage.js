import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Comments from './Comments';

const testComments = [
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	},
	{
		createdAt: '2018-06-11T07:26:43.991Z',
		text: 'test'
	}
];

class ProfilePage extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col sm={8}>
						<h2>Latest Images</h2>
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
						<img
							style={{ width: '200px' }}
							src="http://localhost:3000/uploads/1528662902178.png"
						/>{' '}
					</Col>
					<Col sm={4}>
						<h2>Your latest comments</h2>
						<Comments comments={testComments} />
						<h2>Something else </h2>
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
						<img
							style={{ width: '50px' }}
							src="https://thumbsplus.tutsplus.com/uploads/users/144/profiles/2366/profileImage/profile_thumbnail%20low.jpg?height=76&width=76"
						/>{' '}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ProfilePage;
