import axios from 'axios';

import { SET_COMMENTS } from './types';

export const setComments = comments => {
	return {
		type: SET_COMMENTS,
		comments
	};
};

export const fetchComments = (url = '') => {
	return dispatch => {
		axios
			.get('/images' + url)
			.then(response => {
				return dispatch(setComments(response.data));
			})
			.catch(error => {
				return false; // add error method
			});
	};
};
