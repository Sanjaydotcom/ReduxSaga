import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imageReducer from './imageReducer';
import errorReducers from './errorReducers';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducers,
    nextPage: pageReducer,
    imageStats: statsReducer,
})

export default rootReducer;