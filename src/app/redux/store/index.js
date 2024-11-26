import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from 'src/app/redux/slices/favoriteSlice'

const store = configureStore({
    reducer: {
        favoriteReducer
    }
})

export default store