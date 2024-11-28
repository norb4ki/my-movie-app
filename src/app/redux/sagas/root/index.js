import { all } from 'redux-saga/effects';
import watchFavoriteSaga from "../favorite/index.js";
import watchMovieSaga from "../movie/index.js";


export default function* rootSaga() {
    yield all([
        watchFavoriteSaga(),
        watchMovieSaga(),
    ]);
}
