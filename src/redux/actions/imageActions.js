import axios from 'axios';

import { SET_IMAGES } from './types';

export const setImages = images => {
	return {
		type: SET_IMAGES,
		images: images
	};
};

export const fetchImages = (state, action) => {
	return dispatch => {
		axios
			.get('/images')
			.then(response => {
				return dispatch(setImages(response.data));
			})
			.catch(error => {
				return false; // add error method
			});
	};
};
