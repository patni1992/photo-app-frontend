import React, { Component } from 'react';
import Tag from './Tag';
import FontAwesome from 'react-fontawesome';
import Link from './common/Link';

// ..rest of your code

//import image from './Image';

import styled from 'styled-components';

const Figure = styled.figure`
	margin-left: 8px;
	margin-right: 8px
	flex-basis: calc(40.333% - 4rem);
	border: 2px solid #d3d3d3;
	flex-grow: 1;
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	height: auto;
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
	overflow: hidden;
	max-height: 500px;
	min-width: 270px;
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

const Header = styled.div`padding: 0 7px;`;

const Thumbnail = styled.img`
	border-radius: 20px;
	width: 30px;
	margin: 10px;
`;

const ThumbnailContainer = styled.div`
	display: inline-flex;
	align-items: center;
`;

const FigCaption = styled.figcaption`margin-left: 10px;`;

const P = styled.p`margin-left: 5px;`;
class Photo extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderIcons() {
		let actionIcons = [];
		if (this.props.editPhoto) {
			actionIcons.push(
				<EditContainer
					onClick={() =>
						this.props.editPhoto({
							src: this.props.src,
							tags: this.props.tags.join(','),
							description: this.props.description,
							id: this.props.id
						})}
				>
					<FontAwesome name="pencil" />
				</EditContainer>
			);
		}

		if (this.props.deletePhoto) {
			actionIcons.push(
				<TrashContainer
					onClick={() => this.props.deletePhoto(this.props._id)}
				>
					<FontAwesome name="trash" />
				</TrashContainer>
			);
		}

		return actionIcons;
	}
	render() {
		return (
			<Figure>
				<Header>
					<Link to={this.props.profileLink}>
						<ThumbnailContainer>
							<Thumbnail src="http://placekitten.com/100/100" />
							<strong>{this.props.author.username}</strong>
						</ThumbnailContainer>
					</Link>
				</Header>
				<ImgContainer>
					{this.props.imgLink ? (
						<Link to={this.props.imgLink}>
							<Img className="photo" src={this.props.src} />
						</Link>
					) : (
						<Img className="photo" src={this.props.src} />
					)}
				</ImgContainer>
				<FigCaption>
					{this.renderIcons()}
					<TagContainer>
						{this.props.tags.map(tagText => (
							<Tag tagText={tagText} />
						))}
					</TagContainer>
					<P>{this.props.description}</P>
				</FigCaption>
			</Figure>
		);
	}
}

export default Photo;
