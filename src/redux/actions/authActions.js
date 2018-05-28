import axios from 'axios';

import { SET_ERRORS } from './types';

export function signupRequest(userData) {
	return dispatch => {
		return axios
			.post('/users', userData)
			.then(res => {
				console.log(res);
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
