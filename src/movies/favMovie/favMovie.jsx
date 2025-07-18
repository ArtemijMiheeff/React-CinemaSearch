import React from "react";
import MovieFavCard from "../movieFavCard.jsx";

import { useSelector } from "react-redux";
import empty from '../../assets/JohnTr.gif'

import './favMovie.css'

function FavMovie(){
    const favMovie = useSelector(state => state.favMovieList.favMovie);
    // console.log('Ы',favMovie);
    // console.log('Ы1',typeof favMovie);
    // console.log('ИсМассив?',Array.isArray(favMovie));
    // console.log(favMovie.length);
    if (favMovie.length>0)
    {
        // console.log('длина > 0');
        return(
            <div className="movie-list">
                {favMovie.map((elem) => (
                    <MovieFavCard key={elem.id} movie={elem}/>
                    )
                )}
            </div>
        )
    }
    else
    {
        // console.log('длина !> 0');
        return(
            <div className="emptyPage">
            {/* <h3>Ничего не добавлено в избранное</h3> */}
            <img src={empty} className="empty-gif" />
            </div>
        )
    }
}

export default FavMovie;