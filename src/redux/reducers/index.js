import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import activeEditImageReducer from './activeEditImageReducer';

export default combineReducers({
	images: imageReducer,
	activeEditImage: activeEditImageReducer
});
