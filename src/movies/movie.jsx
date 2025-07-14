import React from "react";
import './movies.css'
import png from '../assets/noposter.png';

class Movie extends React.Component
{
    movie = this.props.movie;
    render()
    {
        // console.log(this.movie.poster?.url == null ? 'null' : this.movie.poster.url);
        return(
            <div className="movie-item">
                <div className="movieImg">
                    <img src={this.movie.poster?.url == null ? png : this.movie.poster.url} className="poster"/>
                </div>
                <div>
                    <p className="movieTitle">{this.movie.name == null ? this.movie.alternativeName : this.movie.name}</p> 
                    <p className="yearAndLength">{this.movie.year == null ? '' : this.movie.year} ◉ {this.movie.movieLength == null ? '?' : this.movie.movieLength} min</p> 
                </div> 
            </div>
        )
    }
}
export default Movie;