// import Header from '../header/header'
import poster from '../assets/noposter.png'
import back from '../assets/back.png'

import './moviePage.css'

import { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { api } from "../api";
import { favMovieActions } from '../store/favMovieSlice.js'

function MoviePage() {
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const setDelFvrt = (movieData) =>{
      setIsClicked(true); // Кнопка нажата
      setTimeout(() => {
        setIsClicked(false); // Возвращаем состояние через некоторое время
      }, 150);
      favMovie.some(favItem => favItem.id === movieData.id) ? dispatch(favMovieActions.removeFavMovie(movieData)) : dispatch(favMovieActions.setFavMovie(movieData));
      
    }
    const buttonStyle = {
      backgroundColor: isClicked ? 'rgba(25, 60, 184, 1)' : 'rgba(190, 219, 255, 1)', // Меняем цвет фона
      color: isClicked ? 'aliceblue':'black',
      // padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.25s ease', // Плавный переход
    };
    const favMovie = useSelector(state => state.favMovieList.favMovie);
    const isInFav = (movieData) =>
    {
      // console.log(favMovie.includes(movieData));
      if (favMovie.some(favItem => favItem.id === movieData.id))
        {
          return 'Удалить из избранного';
        } 
      else{
          return 'Добавить в избранное';
        }
          
    }
    const {id} = useParams();
    // console.log(id);
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
      const endpoint = `v1.4/movie/${id}`;  
      
      api.get(endpoint)
      .then(response => {
        // console.log(response.data);
        // console.log(response.data.backdrop.url);
        setMovie(response.data);})
        .catch(error => {
          console.error("Ошибка при получении данных:", error);
        });
      }, [id]);
      // console.log(movie);

  return (
    <div>
        {movie? (
      <div>
      <div className="moviepage"
        style={{
            backgroundImage: movie.backdrop ? `url(${movie.backdrop.url})` : `url(${back})`,
            filter: 'brightness(0.3)',
        }}> </div>
        <div className="desc_and_logo">
            <div className="descrptn">
                <p className="descTitle">{movie.name == null ? movie.alternativeName : movie.name}</p>
                {/* <p className="descTitle">{movie.name}</p> */}
                <p className="descData">{movie.year} ◉ {movie.movieLength == null ? '? ' : movie.movieLength} min ◉ Rtng:{movie.rating.kp}</p>
                <p className="descDescr">{movie.description}</p>
            <div className="buttons">
                <button className="button1">Button 1</button>
                <button className="button1">Button 2</button>
                <button className="button2">Button 3</button>
                <button className="buttonFvrt" onClick={() => setDelFvrt(movie)} style={buttonStyle}>{isInFav(movie)}</button>
                {/* <button className="buttonFvrt">{isInFav(movie)}</button> */}
            </div>
            </div>
            <img className="posterLogo" src={movie.poster ? `${movie.poster.url}` : `${poster}`} />
        </div>
      </div>
        ):(<h1></h1>)}
    </div>
  );
}

export default MoviePage;