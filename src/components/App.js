import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Navbar from './Navbar';
import AddPhotos from './AddPhotos';
import Albums from './Albums';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Gallery} />
					<Route path="/addPhotos" component={AddPhotos} />
					<Route path="/albums" component={Albums} />
				</div>
			</Router>
		);
	}
}

export default App;
