import React from "react";
import Movie from "../movie";

import { useSelector } from "react-redux";

import './searchResult.css'

function SearchResult()
{
    const movies = useSelector(state => state.movieList.movies);
    const nameSearch = useSelector(state => state.searchList.nameSearch).toLowerCase();
    // console.log('name for search:', nameSearch);
    // console.log('Серч результ: ', movies);
    const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(nameSearch));
    // console.log(filteredMovies);
    if (filteredMovies.length>0)
    {
        return(
            <div className="movie-list">
            {filteredMovies.map((elem) => (
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
            <h3>Ничего не найдено по запросу '{nameSearch}'</h3>
            </div>
        )
    }
}

export default SearchResult;