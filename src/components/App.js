import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PhotoDetail from './PhotoDetail';
import store from '../store';
import Gallery from './Gallery';
import Navbar from './Navbar';
import Footer from './Footer';
import AddPhotos from './AddPhotos';
import profilePage from './ProfilePage';
import AuthPage from './authForms/AuthPage';
import Albums from './Albums';
import RequireAuth from './RequireAuth';
import { Container, Content, FullPageImg } from './styledComponents/ui';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<Route
					path="/auth"
					render={() => {
						return (
							<FullPageImg>
								<AuthPage />
							</FullPageImg>
						);
					}}
				/>
				<Content>
					<Route exact path="/" component={RequireAuth(Gallery)} />
					<Route
						path="/addPhotos"
						component={RequireAuth(AddPhotos)}
					/>
					<Route
						path="/photo/:id"
						component={RequireAuth(PhotoDetail)}
					/>
					<Route
						path="/profile"
						component={RequireAuth(profilePage)}
					/>
				</Content>
				<Footer />
			</div>
		);
	}
}

export default App;
