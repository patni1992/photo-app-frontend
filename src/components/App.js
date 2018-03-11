import React, { Component } from 'react';
import Gallery from './Gallery';
import Navbar from './Navbar';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Gallery />
			</div>
		);
	}
}

export default App;
