import { takeEvery, select ,call, put} from 'redux-saga/effects';
import {IMAGES} from '../constants';
import {fetchImages} from '../api/index';
import {setImages, setError} from '../actions';

const setPage = state => state.nextPage;

function* handleImagesLoad() {
    //workerSaga 
    try {
        const page = yield select(setPage)
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        //dispatch 
        yield put(setError(error.toString()));

    }
   
}

function* WatchImagesLoad() {
    //watcherSaga
 yield takeEvery(IMAGES.LOAD, handleImagesLoad)
 
}

export default WatchImagesLoad;