import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store';
import setAuthToken from './utils/sethAuthToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './redux/actions/authActions';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

registerServiceWorker();

const initApp = () => {
	if (localStorage.jwtToken) {
		setAuthToken(localStorage.jwtToken);
		const decoded = jwtDecode(localStorage.jwtToken);
		store.dispatch(setCurrentUser(decoded));
		if (window.location.pathname.split('/').pop() === 'auth') {
			history.push('/');
		}
	}
};

const render = Component => {
	return ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>,
		document.getElementById('root')
	);
};

initApp();
render(App);

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default;
		render(NextApp);
	});
}
