import axios from 'axios';

import { SET_IMAGES } from './types';

export const setImages = images => {
	return {
		type: SET_IMAGES,
		images: images
	};
};

export const fetchImages = (url = '') => {
	return dispatch => {
		axios
			.get('/images' + url)
			.then(response => {
				return dispatch(setImages(response.data));
			})
			.catch(error => {
				return false; // add error method
			});
	};
};
