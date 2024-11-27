import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from '../slices/favoriteSlice';

const store = configureStore({
    reducer: {
        favoriteReducer
    }
})

export default store