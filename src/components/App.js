import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Navbar from './Navbar';
import AddPhotos from './AddPhotos';
import Albums from './Albums';
import PhotoDetail from './PhotoDetail';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Gallery} />
					<Route path="/addPhotos" component={AddPhotos} />
					<Route path="/albums" component={Albums} />
					<Route path="/photo/:id" component={PhotoDetail} />
				</div>
			</Router>
		);
	}
}

export default App;
