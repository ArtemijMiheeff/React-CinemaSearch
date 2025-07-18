import React from "react";

import { useSelector } from "react-redux";

import './randomMovie.css'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomMovie()
{
    const movieList = useSelector(state => state.movieList.movie);
    console.log("movieList: ", movieList);
    // const randomMovie = movieList[getRandomInt(0, movieList.length)];
    console.log('число: ', getRandomInt(0, 102));
    // console.log(randomMovie);
    return(
        <div className="telo">
            'Aaaaa?'
        </div>
    )
}

export default RandomMovie;