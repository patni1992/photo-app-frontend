import React, { Component } from 'react';
import dummyData from '../dummyData';
import Photo from './Photo';
import styled from 'styled-components';

const Styling = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1000px;
	margin: 0 auto;
`;

class Gallery extends Component {
	render() {
		return (
			<Styling>{dummyData.map((data) => <Photo description={data.description} src={data.imageLink} />)}</Styling>
		);
	}
}

export default Gallery;
