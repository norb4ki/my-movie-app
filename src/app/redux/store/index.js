import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from '../slices/favorite';
import movieReducer from '../slices/movie';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/root/index.js";

const sagaMiddleware = createSagaMiddleware();

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
        console.log('storage saved locally')
    } catch (err) {
        console.error('could not save state', err);
    }
};

const persistedState = loadStateFromLocalStorage();

const store = configureStore({
    reducer: {
        favoriteReducer,
        movieReducer
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveStateToLocalStorage(store.getState());
});

export default store;
