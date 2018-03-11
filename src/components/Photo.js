import React, { Component } from 'react';
import Tag from './Tag';
//import image from './Image';

import styled from 'styled-components';

const Figure = styled.figure`
	flex-basis: calc(33.333% - 4rem);
	border: 1px solid #d3d3d3;
	max-width: 25rem;
	padding: 2rem;
	flex-grow: 1;
	margin: 0 2rem 2rem 2rem;
`;

const Img = styled.img`
	width: calc(100% + 4rem);
	margin-left: -2rem;
	margin-top: -2rem;
	max-width: none;
`;

const TagContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
`;

class Photo extends Component {
	render() {
		return (
			<Figure>
				<Img className="photo" src={this.props.src} />
				<figcaption>
					<TagContainer>{this.props.tags.map((tagText) => <Tag tagText={tagText} />)}</TagContainer>
					<p>{this.props.description}</p>
				</figcaption>
			</Figure>
		);
	}
}

export default Photo;
