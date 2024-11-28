import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        getFavoriteRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getFavoriteSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getFavoriteFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        postFavoriteRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        postFavoriteSuccess: (state) => {
            state.loading = false;
        },
        postFavoriteFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {
    getFavoriteRequest,
    getFavoriteFailure,
    getFavoriteSuccess,
    postFavoriteRequest,
    postFavoriteFailure,
    postFavoriteSuccess,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;