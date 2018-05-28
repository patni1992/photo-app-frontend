import axios from 'axios';
import { push } from 'react-router-redux';

import { SET_ERRORS } from './types';

export function signupRequest(userData) {
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
