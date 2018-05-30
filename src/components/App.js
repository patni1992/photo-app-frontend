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
import RequireAuth from './RequireAuth';
import { FullPageImg } from './styledComponents/ui';

const history = createHistory();

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(routerMiddleware(history), thunk)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div class="app">
						<Navbar />
						<Route
							path="/auth"
							render={() => {
								return (
									<FullPageImg>
										<Container>
											<AuthPage />
										</Container>
									</FullPageImg>
								);
							}}
						/>
						<Container>
							<Route
								exact
								path="/"
								component={RequireAuth(Gallery)}
							/>
							<Route
								path="/addPhotos"
								component={RequireAuth(AddPhotos)}
							/>
							<Route
								path="/photo/:id"
								component={RequireAuth(PhotoDetail)}
							/>
						</Container>
						<Footer />
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
