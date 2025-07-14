import React from "react";
import './movies.css'
import Movie from './movie.jsx';
import axios from 'axios';

class Movies extends React.Component
{
    constructor(props)
    {
        super(props)
        var movies=[];
        const baseUrl = 'https://api.kinopoisk.dev/';
        const endpoint = 'v1.4/movie?page=1&limit=102&selectFields=id&selectFields=name&selectFields=alternativeName&selectFields=description&selectFields=slogan&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=backdrop&selectFields=logo';
        // const apiKey = 'K2RKCRW-XSD4Q1A-PCH0J54-W8G1CJM';
        const apiKey = '5ZCCR76-7W64YJD-N52N4RM-EPE3V0B';

        const urlWithKey = baseUrl + endpoint;
        this.state = {
            movies: [] 
        }
        try{

            axios.get(urlWithKey, {headers: {'X-API-KEY': apiKey, 'content-type': 'application/json'}})
            .then((response) => this.setState({movies: response.data.docs}));
            //this.setState({movies: response.data.docs})); 
            //console.log(response.data.docs)));
        }
        catch (error)
        {
            console.log('error', error);
        }
    }
 
    render()
    {
        if (this.state.movies.length>0)
        {
        return(
        <div className="movie-list">
                {this.state.movies.map((elem) => (
                <Movie key={elem.id} movie={elem}/>
            )
            )}
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
