import React, { useState, useEffect } from "react";import Header from '../header/header'
import { useParams } from "react-router-dom";
import './moviePage.css'
import poster from '../assets/noposter.png'
import back from '../assets/back.png'
import axios from "axios";

function MoviePage() {

    const {id} = useParams();
    console.log(id);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
    const baseUrl = 'https://api.kinopoisk.dev/';
    const endpoint = `v1.4/movie/${id}`; // Используем movieId в endpoint      
    const apiKey = '5ZCCR76-7W64YJD-N52N4RM-EPE3V0B';

    const urlWithKey = baseUrl + endpoint;
    console.log(urlWithKey);
    axios.get(urlWithKey, {
      headers: {
        'X-API-KEY': apiKey,
        'content-type': 'application/json'
      }
    })
    .then(response => {
        console.log(response.data);
        // console.log(response.data.backdrop.url);
        setMovie(response.data);})
    .catch(error => {
      console.error("Ошибка при получении данных:", error);
    });
  }, [id]);

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
            <div className="buttons">
                <button className="button1">Button 1</button>
                <button className="button2">Button 2</button>
                <button className="button3">Button 3</button>
                <button className="button3">Button 4</button>
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