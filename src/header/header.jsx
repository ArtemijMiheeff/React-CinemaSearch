import './header.css';
import Image from '../image/image.jsx';
import png from '../assets/react.svg';
import FavMovie from '../movies/favMovie/favMovie.jsx';

import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nameSearchActions } from '../store/nameSearchSlice.js';

function Header(props) {
  const [nameSearch, setNameSearch] = useState('') ;
  const movieList = useSelector(state => state.movieList.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  }
  const goFavMovie = () =>{
    navigate('/favMovie');
  }
  const getRandomInt = (min, max) =>
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function goRandomMovie (){
    // console.log('Тип листа ',typeof movieList);
    console.log('Лист муви: ', movieList);
    const randMovie = movieList[getRandomInt(0, movieList.length)]
    const randMovieID = randMovie.id;
    console.log(randMovieID);
    // console.log(movieList);
    navigate(`/moviepage/${randMovieID}`);
  }
  const goSearchResult = () =>{
    dispatch(nameSearchActions.setNameSearch(nameSearch));
    // console.log('Searching for:', nameSearch)
    navigate('/searchResult');
  }
  const setNameSrch = (event) => {
    setNameSearch(event.target.value);
    // console.log('hmmm', nameSearch);
  }

  return (
    <header className="header">
      <div className='headLogoTitle'>
        <Image image={png} />
        <p onClick={goMain}>{props.title}</p>
      </div>
      <div className='searchBlock'>
        <input className='searchField' value={nameSearch} onChange={setNameSrch} placeholder= 'Наименование фильма'></input>
        <button className='buttonSearch' onClick={goSearchResult}>🔎</button>
      </div>
      <button className='buttonRandomMovie' onClick={goRandomMovie}>Случайный фильм</button>
      <button className='buttonFavMovie' onClick={goFavMovie}>Избранное</button>
      {/* <FavMovie /> */}
    </header>
  );
}

export default Header;