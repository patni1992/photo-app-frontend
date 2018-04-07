import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Gallery from './Gallery';
import Navbar from './Navbar';
import AddPhotos from './AddPhotos';
import Albums from './Albums';
import { Provider } from 'react-redux';
import PhotoDetail from './PhotoDetail';
import rootReducer from '../redux/reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<Route exact path="/" component={Gallery} />
						<Route path="/addPhotos" component={AddPhotos} />
						<Route path="/albums" component={Albums} />
						<Route path="/photo/:id" component={PhotoDetail} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
