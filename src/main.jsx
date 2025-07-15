import { React } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './movies/moviePage.jsx';
import Header  from './header/header.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <Header title="CinemaSearch"/>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/moviepage/:id' element={<MoviePage />} />
    </Routes>
  </Router>,
)
