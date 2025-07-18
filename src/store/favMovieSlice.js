import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favMovie: []
}

const favMovieSlice = createSlice({
    name: "favMovie",
    initialState: initialState,
    reducers: {
        setFavMovie: (state, action) => {
            console.log('Добавлено в избранное');
            // console.log('тип штуки:', typeof action.payload);
            const movieToAdd = action.payload;
            state.favMovie.some(favMovieItem => favMovieItem.id === movieToAdd.id) ? console.log('nonono') : state.favMovie = [...state.favMovie, action.payload];
        },
        
        removeFavMovie: (state, action) => {
            // console.log('Удалено из избранного');
            const movieToRemove = action.payload;
            state.favMovie = state.favMovie.filter(movie => movie.id !== movieToRemove.id);
        }
    }
})

export const favMovieActions = favMovieSlice.actions;
export const favMovieReducer = favMovieSlice.reducer;