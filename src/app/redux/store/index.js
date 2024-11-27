import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from '../slices/favoriteSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/root/index.js";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        favoriteReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
export default store