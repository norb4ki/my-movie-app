import {call, put, takeLatest} from 'redux-saga/effects'
import {
    getPopularFailure,
    getPopularRequest,
    getPopularSuccess,
    getAirRequest,
    getAirFailure,
    getAirSuccess
} from "../../slices/moviesSlice/index.js";
import {getAirMovies, getPopularMovies} from "../../../services/movieService/index.js";

function* getPopularSaga(action){
    try{
        const data = yield call(getPopularMovies, action.payload.page, action.payload.language);
        yield put(getPopularSuccess(data));
    } catch (error){
        yield put(getPopularFailure(error.message));
    }
}

function* getAirSaga(action){
    try{
        const data = yield call(getAirMovies, action.payload.page, action.payload.language);
        yield put(getAirSuccess(data));
    } catch (error){
        yield put(getAirFailure(error.message));
    }
}

export default function* watchFavoriteSaga(){
    yield takeLatest(getPopularRequest.type, getPopularSaga);
    yield takeLatest(getAirRequest.type, getAirSaga)
}