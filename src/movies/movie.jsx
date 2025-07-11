import React from "react";
import './movies.css'
import LoadMovies from "./loadMovies";

class Movie extends React.Component
{
    movie = this.props.movie;
    render()
    {
        return(
        <div className="movieCard">
            <div className="movieImg">
                <img src={this.movie?.poster?.['600w']} className="poster"/>
            </div>
            <div className="movie">
                <div className="movieDesc">
                    <h3>Title</h3>
                    <p>{this.movie.title}</p> 
                <h3>Description</h3>
                    <p>{this.movie.disc}</p> 
                <h3>Rating</h3>
                    <p>{this.movie.rating}</p> 
                <h3>Year</h3>
                    <p>{this.movie.year}</p>
                </div> 
            </div>
        </div>
        )
    }
}
export default Movie;