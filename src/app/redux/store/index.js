import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from '../slices/favorite';
import movieReducer from '../slices/movie';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/root/index.js";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        favoriteReducer,
        movieReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
export default store