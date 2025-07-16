import { React } from 'react';
import { configureStore } from "@reduxjs/toolkit";
import { createRoot } from 'react-dom/client';
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import './index.css';
import App from './App.jsx';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistReducer} from "redux-persist";
import persistStore from 'redux-persist/es/persistStore';

// action = {type: "", payload: "?"}
const defaultMovies = {
  movies: [],
}
const reducer = (state = defaultMovies, action) => {
  switch(action.type)
  {
    case "getMovies":
      if (state.movies.length == 0) {
        console.log('Делаю запрос');
        return { ...state, movies: action.payload };
      }
      else {
        console.log('Оно уже заполнено ->', state.movies)
      }
      break;
    default:
      return state;
  }
}

const initialState = {
  movies: []
}

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducer: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    }
  }
})

export const movieActions = moviesSlice.actions;




const persistConfig = {
	key: "kino",
	version: 1,
	storage,
	blacklist: ["team_competition", "competition_team", "mini_leaderboard"],
	debug: true,
	
	
};
const persistedReducer = persistReducer(persistConfig, moviesSlice.reducer);



const store = configureStore({
	reducer: persistedReducer,
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV !== "production",
});

let persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
)
