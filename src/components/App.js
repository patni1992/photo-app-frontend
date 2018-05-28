import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Container, Content } from './styledComponents/ui';
import { Provider } from 'react-redux';
import PhotoDetail from './PhotoDetail';
import rootReducer from '../redux/reducers';
import thunk from 'redux-thunk';

import Gallery from './Gallery';
import Navbar from './Navbar';
import Footer from './Footer';
import AddPhotos from './AddPhotos';
import AuthPage from './authForms/AuthPage';
import Albums from './Albums';

const history = createHistory();

const store = createStore(
	rootReducer,
	applyMiddleware(routerMiddleware(history), thunk)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<Content>
							<Navbar />
							<Container>
								<Route exact path="/" component={Gallery} />
								<Route
									path="/addPhotos"
									component={AddPhotos}
								/>
								<Route path="/albums" component={Albums} />
								<Route
									path="/photo/:id"
									component={PhotoDetail}
								/>
								<Route path="/auth" component={AuthPage} />
							</Container>
						</Content>
						<Footer />
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
