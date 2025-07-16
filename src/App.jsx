// import { useState } from 'react';
import HomePage from './homePage/homePage.jsx';
import MoviePage from './movies/moviePage.jsx';
import Header  from './header/header.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect} from 'react';
import {api} from './api.js'
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import './App.css';
import { movieActions } from './store/moviesSlice.js';

function App() {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  console.log("Filmyi: ", movies);

  const setMovies = (movieData) => {
    dispatch(movieActions.setMovies(movieData))
  }
  useEffect(() => {
    const endpoint = 'v1.4/movie';

    try {
      api.get(endpoint, {
        params: {
          limit: 102,
          page: 1,
          notNullFields: ['backdrop.url'],
          selectFields: [
            'id',
            'name',
            'alternativeName',
            'description',
            'slogan',
            'year',
            'rating',
            'movieLength',
            'genres',
            'countries',
            'poster',
            'backdrop',
            'logo',
          ],
        },
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      })
        .then((response) => setMovies(response.data.docs));
          console.log("Filmyi posle: ", movies);

    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
      <Router>
    <Header title="CinemaSearch"/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/moviepage/:id' element={<MoviePage />} />
    </Routes>
  </Router>
  )
}

export default App
