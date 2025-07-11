import React from "react";
import './movies.css'
import Movie from './movie.jsx';
import axios from 'axios';
import LoadMovies from "./loadMovies.jsx";

class Movies extends React.Component
{
    constructor(props)
    {
        super(props)

        const baseUrl = 'https://movie-api38.p.rapidapi.com/movie/';
        const apiKey = '02b95ecb4bmsh7f31cfbbef4a610p10c7a5jsn30d2253d1fcf';
        const apiPart = '?rapidapi-key=';
        //https://movie-api38.p.rapidapi.com/movie?rapidapi-key=02b95ecb4bmsh7f31cfbbef4a610p10c7a5jsn30d2253d1fcf
        // const urlWithKey = {
        //     method: 'GET',
        //     url: 'https://movie-api38.p.rapidapi.com/movie',
        //     headers: {
        //         'x-rapidapi-key': '02b95ecb4bmsh7f31cfbbef4a610p10c7a5jsn30d2253d1fcf',
        //         'x-rapidapi-host': 'movie-api38.p.rapidapi.com'
        //     }
        // };
        const urlWithKey = baseUrl + apiPart + apiKey;
        this.state = {
            movies: [] 
        }
        try{

            axios.get(urlWithKey).then((response) => {
                this.setState({movies: response.data.data});
                console.log(response.data.data)
            })
        }
        catch (e)
        {
            console.log('error');
        }

    }
 
    render()
    {
        if (this.state.movies.length>0)
        {
        return(
        <div>
            {this.state.movies.map((elem) => (
                <Movie key={elem.id} movie={elem}/>
            )
            )}
            <LoadMovies />
        </div>
        )
        }
        else
        {
            return(
            <div className="movie">
                <h3>There is empty -_-</h3>
            </div>
            )
        }
    }
}
export default Movies;
