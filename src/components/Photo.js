import React, { Component } from 'react';
import Tag from './Tag';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

// ..rest of your code

//import image from './Image';

import styled from 'styled-components';

const Figure = styled.figure`
	margin-left: 0;
	flex-basis: calc(36.333% - 4rem);
	border: 1px solid #d3d3d3;
	flex-grow: 1;
	position: relative;
`;

const Img = styled.img`
	width: 100%;

	margin-bottom: -5px;
	transition: 0.7s ease;
`;

const TagContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
`;

const ImgContainer = styled.div`
	background: #a9a9a9;
	&:hover {
		cursor: pointer;
	}
`;

const EditContainer = styled.span`
	position: absolute;
	bottom: 57px;
	right 25px;
	cursor: pointer;
`;

const TrashContainer = styled.span`
	position: absolute;
	bottom: 57px;
	right 60px;
	cursor: pointer;
`;

const FigCaption = styled.figcaption`margin-left: 10px;`;

const P = styled.p`margin-left: 5px;`;
class Photo extends Component {
	render() {
		return (
			<Figure>
				<ImgContainer>
					{this.props.link ? (
						<Link to={this.props.link}>
							<Img className="photo" src={this.props.src} />
						</Link>
					) : (
						<Img className="photo" src={this.props.src} />
					)}
				</ImgContainer>
				<FigCaption>
					<EditContainer>
						<FontAwesome name="pencil" />
					</EditContainer>
					<TrashContainer onClick={() => this.props.deletePhoto(this.props._id)}>
						<FontAwesome name="trash" />
					</TrashContainer>
					<TagContainer>{this.props.tags.map((tagText) => <Tag tagText={tagText} />)}</TagContainer>
					<P>{this.props.description}</P>
				</FigCaption>
			</Figure>
		);
	}
}

export default Photo;
