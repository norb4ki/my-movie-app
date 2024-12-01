import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    popularData: [],
    airData: [],
    loading: false,
    error: null,
    lastPopularRequestTime: null,
    lastAirRequestTime:null
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        getPopularRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getPopularSuccess: (state, action) => {
            state.loading = false;
            state.popularData = action.payload;
            state.lastPopularRequestTime = Date.now();
        },
        getPopularFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getAirRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getAirSuccess: (state, action) => {
            state.loading = false;
            state.airData = action.payload;
            state.lastAirRequestTime = Date.now();
        },
        getAirFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const {
    getPopularFailure,
    getPopularRequest,
    getPopularSuccess,
    getAirFailure,
    getAirRequest,
    getAirSuccess
} = movieSlice.actions;
export default movieSlice.reducer;