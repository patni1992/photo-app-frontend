import React, { Component } from 'react';
import dummyData from '../dummyData';
import Photo from './Photo';

class Gallery extends Component {
	render() {
		return <div className="gallery">{dummyData.map((data) => <Photo src={data.imageLink} />)}</div>;
	}
}

export default Gallery;
