import React, { useState, useEffect } from "react";
import axios from "axios";

function LoadMovies() {
const urlWithKey = {
  method: 'GET',
  url: 'https://movie-api38.p.rapidapi.com/movie',
  headers: {
    'x-rapidapi-key': '02b95ecb4bmsh7f31cfbbef4a610p10c7a5jsn30d2253d1fcf',
    'x-rapidapi-host': 'movie-api38.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.get(urlWithKey);
		// console.log(response.data);
	} catch (error) {
		// console.error(error);
	}
}

fetchData();
}
export default LoadMovies;