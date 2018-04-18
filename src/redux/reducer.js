import { combineReducers } from 'redux';

const initialState = [];
function images(state = initialState, action) {
	switch (action.type) {
		case 'SET_IMAGES':
			return action.images;
		default:
			return state;
	}
}

function activeEditImage(state = {}, action) {
	switch (action.type) {
		case 'SET_ACTIVE_EDIT_IMAGE':
			return action.activeEditImage;
		default:
			return state;
	}
}

const rootReducer = combineReducers({ images, activeEditImage });

export default rootReducer;
