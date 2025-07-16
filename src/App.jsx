// import { useState } from 'react';
import './App.css';
import HomePage from './homePage/homePage.jsx';
import MoviePage from './movies/moviePage.jsx';
import Header  from './header/header.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {api} from './api.js'

function App() {
  // const [count, setCount] = useState(0)
  //const [movies, setMovies] = useState([]);
  //const movies = [];

  // const endpoint = 'v1.4/movie';

  // try{
  //   api.get(endpoint, {
  //       params: {
  //           "limit":102,
  //       "page": 1,
  //       "notNullFields": ["backdrop.url"],
  //       "selectFields": [
  //               "id",
  //               "name",
  //               "alternativeName",
  //               "description",
  //               "slogan",
  //               "year",
  //               "rating",
  //               "movieLength",
  //               "genres",
  //               "countries",
  //               "poster",
  //               "backdrop",
  //               "logo",
  //       ],
  //       },
  //       paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
  //     })
  //     .then((response) => this.setState({movies: response.data.docs}));
  //     //this.setState({movies: response.data.docs})); 
  //     //console.log(response.data.docs)));
  // }
  // catch (error)
  // {
  //     console.log('error', error);
  // }

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
