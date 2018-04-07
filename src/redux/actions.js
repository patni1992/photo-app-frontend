import axios from 'axios';

export const setImages = (images) => {
	return {
		type: 'SET_IMAGES',
		images: images
	};
};

export const initImages = (state, action) => {
	return (dispatch) => {
		axios
			.get('/images')
			.then((response) => {
				return dispatch(setImages(response.data));
			})
			.catch((error) => {
				return dispatch(setImages(error));
			});
	};
};
