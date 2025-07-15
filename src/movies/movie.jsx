import React from "react";
import './movies.css';
import png from '../assets/noposter.png';
import { Link } from "react-router-dom";

function Movie({ movie }) {
    return (
    <div className="movie-item" key={movie.id}>
      <Link to={`/moviepage/${movie.id}`} className="linkNoDecor">
        <div className="movieImg">
          <img src={movie.poster?.url == null ? png : movie.poster.url} className="poster" />
        </div>
        <div>
          <p className="movieTitle"> {movie.name == null ? movie.alternativeName : movie.name} </p>
          <p className="yearAndLength"> {movie.year == null ? '' : movie.year} ◉ {movie.movieLength == null ? '?' : movie.movieLength} min </p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;