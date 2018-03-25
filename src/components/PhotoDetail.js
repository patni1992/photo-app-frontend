import React, { Component } from 'react';
import Photo from './Photo';
import styled from 'styled-components';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class PhotoDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.match.params.id);
		return (
			<Styling>
				<h2>{this.props.match.params.id}</h2>
			</Styling>
		);
	}
}

export default PhotoDetail;
