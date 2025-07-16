import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})

export const movieActions = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;