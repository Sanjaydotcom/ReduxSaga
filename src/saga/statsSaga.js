const { take } = require("redux-saga/effects");

import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';

function* watchStatsRequest() {
    while(true){
        yield take(IMAGES.LOAD.SUCCES
    }
    
}