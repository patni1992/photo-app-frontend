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

const rootReducer = combineReducers({ images });

export default rootReducer;
