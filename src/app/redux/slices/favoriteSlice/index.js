import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        addFavorite: (state, action) => {

        },
        removeFavorite: (state, action) => {

        },
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;