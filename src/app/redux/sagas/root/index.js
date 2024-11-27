import { all } from 'redux-saga/effects';
import watchFavoriteSaga from "../favoriteSaga/index.js";


export default function* rootSaga() {
    yield all([
        watchFavoriteSaga(),
    ]);
}
