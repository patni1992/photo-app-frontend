import axios from 'axios';

import { SET_COMMENTS, ADD_COMMENT } from './types';

export const setComments = comments => {
	return {
		type: SET_COMMENTS,
		comments
	};
};

export const addComment = comment => {
	return {
		type: ADD_COMMENT,
		comment
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

export const postComment = (id, comment) => {
	return dispatch => {
		console.log(id);
		console.log(comment);
		axios
			.post(`/images/${id}/comments`, {
				text: comment
			})
			.then(response => {
				console.log(response.data.text);
				return dispatch(addComment(response.data));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
