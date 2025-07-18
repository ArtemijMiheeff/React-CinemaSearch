import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { thunk } from 'redux-thunk'
import { persistReducer } from "redux-persist";
import { movieReducer } from "./moviesSlice";
import { nameSearchReducer } from "./nameSearchSlice";
import {favMovieReducer} from "./favMovieSlice";

const mainReducers = combineReducers(
    {
        movieList:movieReducer,
        searchList: nameSearchReducer,
        favMovieList: favMovieReducer,
    }
)

const persistConfig = {
    key: "kino",
    version: 2,
    storage,
    debug: true,
};
const persistedReducer = persistReducer(persistConfig, mainReducers);



export const store = configureStore({
    reducer: persistedReducer,
    // eslint-disable-next-line no-undef
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => [thunk],
});





// const defaultMovies = {
//     movies: [],
// }
// const reducer = (state = defaultMovies, action) => {
//     switch (action.type) {
//         case "getMovies":
//             if (state.movies.length == 0) {
//                 console.log('Делаю запрос');
//                 return { ...state, movies: action.payload };
//             }
//             else {
//                 console.log('Оно уже заполнено ->', state.movies)
//             }
//             break;
//         default:
//             return state;
//     }
// }