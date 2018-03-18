import React, { Component } from 'react';
import Tag from './Tag';
import FontAwesome from 'react-fontawesome';

// ..rest of your code

//import image from './Image';

import styled from 'styled-components';

const FaStyling = styled.span`
	position: absolute;
	top: calc(50% - 75px);
	left: calc(50% - 24px);
	opacity: 0;
	transition: 0.7s ease;
	& span {
		color: white;
		font-size: 50px;
	}
`;

const Figure = styled.figure`
	flex-basis: calc(33.333% - 4rem);
	border: 1px solid #d3d3d3;
	flex-grow: 1;
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	max-width: none;
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
	&:hover ${Img} {
		opacity: 0.6;
	}
	&:hover ${FaStyling} {
		opacity: 1;
	}
`;

const FigCaption = styled.figcaption`margin-left: 10px;`;

const P = styled.p`margin-left: 5px;`;
class Photo extends Component {
	render() {
		return (
			<Figure>
				<ImgContainer>
					<Img className="photo" src={this.props.src} />
					<FaStyling>
						<FontAwesome name="search-plus" />
					</FaStyling>
				</ImgContainer>
				<FigCaption>
					<TagContainer>{this.props.tags.map((tagText) => <Tag tagText={tagText} />)}</TagContainer>
					<P>{this.props.description}</P>
				</FigCaption>
			</Figure>
		);
	}
}

export default Photo;
