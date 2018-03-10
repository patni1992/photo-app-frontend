import React, { Component } from 'react';
//import image from './Image';

class Photo extends Component {
	render() {
		return (
			<div className="photo">
				<img src={this.props.src} alt="" />
			</div>
		);
	}
}

export default Photo;
