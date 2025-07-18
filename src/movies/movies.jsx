import React from "react";
import qs from 'qs';
import Movie from './movie.jsx';

import { api } from "../api.js";
import { useSelector } from "react-redux";

import './movies.css'

function Movies ()
{
    const movies = useSelector((state) => state.movieList.movies);

    if (movies.length>0)
    {
        return(
            <div className="movie-list">
            {movies.map((elem) => (
            <Movie key={elem.id} movie={elem}/>
            )
            )}
            </div>
        )
    }
    else
    {
        return(
            <div className="movieLoading">
            <h3>Loading ...</h3>
            </div>
        )
    }
}
export default Movies;
