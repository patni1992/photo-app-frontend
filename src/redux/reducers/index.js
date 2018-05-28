import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import activeEditImageReducer from './activeEditImageReducer';
import errorReducer from './errorReducer';

export default combineReducers({
	images: imageReducer,
	activeEditImage: activeEditImageReducer,
	errors: errorReducer
});
