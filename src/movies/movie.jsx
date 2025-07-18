import png from '../assets/noposter.png';

import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favMovieActions } from "../store/favMovieSlice";

import './movies.css';
function Movie({ movie }) {
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const buttonStyle = {
      backgroundColor: isClicked ? 'rgba(25, 60, 184, 1)' : 'rgb(3, 12, 50)', // Меняем цвет фона
      color: isClicked ? 'black':'aliceblue',
      // padding: '10px 20px',
      border: '1px solid aliceblue',
      cursor: 'pointer',
      transition: 'background-color 0.25s ease', // Плавный переход
    };
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
      <button className="delButton" style={buttonStyle} onClick={() => 
      {
        dispatch(favMovieActions.setFavMovie(movie)),
        setIsClicked(true); // Кнопка нажата
        setTimeout(() => {
        
          setIsClicked(false); // Возвращаем состояние через некоторое время
        },
        150);
      }}>Добавить в избранное</button>
    </div>
  );
}

export default Movie;