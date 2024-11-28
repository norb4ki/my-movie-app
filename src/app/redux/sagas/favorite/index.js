import {call, put, takeLatest} from 'redux-saga/effects'
import {editFavoriteMovies, getFavoriteMovies} from "../../../services/favoriteService/index.js";
import {
    getFavoriteFailure,
    getFavoriteRequest,
    getFavoriteSuccess,
    postFavoriteFailure,
    postFavoriteRequest,
    postFavoriteSuccess
} from "../../slices/favorite/index.js";

function* getFavoriteSaga(action){
    try{
        const data = yield call(getFavoriteMovies, action.payload.page, action.payload.language);
        yield put(getFavoriteSuccess(data));
    } catch (error){
        yield put(getFavoriteFailure(error.message));
    }
}

function* postFavoriteSaga(action){
    try{
        const data = yield call(editFavoriteMovies, action.payload.body, action.payload.isFavorite);
        yield put(postFavoriteSuccess(data));
    } catch (error){
        yield put(postFavoriteFailure(error.message));
    }
}

export default function* watchFavoriteSaga(){
    yield takeLatest(getFavoriteRequest.type, getFavoriteSaga);
    yield takeLatest(postFavoriteRequest.type, postFavoriteSaga)
}