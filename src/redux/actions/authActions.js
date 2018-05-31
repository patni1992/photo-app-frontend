import axios from 'axios';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import setAuthToken from '../../utils/sethAuthToken';

import { SET_ERRORS, SET_CURRENT_USER } from './types';

export function registerUser(userData) {
	return dispatch => {
		return axios
			.post('/users', userData)
			.then(res => {
				dispatch(push('/'));
			})
			.catch(err => {
				console.log(err.response.data);
				dispatch({
					type: SET_ERRORS,
					payload: err.response.data
				});
			});
	};
}

export const loginUser = userData => dispatch => {
	axios
		.post('/users/login', userData)
		.then(res => {
			const token = res.data;
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			const decoded = jwtDecode(token);
			dispatch(setCurrentUser(decoded));
			dispatch(push('/'));
		})
		.catch(err => {
			dispatch({
				type: SET_ERRORS,
				payload: err.message
			});
		});
};

export const logoutUser = userData => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	dispatch(push('/'));
};

export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};
