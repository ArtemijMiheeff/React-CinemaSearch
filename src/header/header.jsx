import './header.css';
import Image from '../image/image.jsx';
import png from '../assets/react.svg';
import FavMovie from '../movies/favMovie/favMovie.jsx';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nameSearchActions } from '../store/nameSearchSlice.js';


function Header(props) {
  const [nameSearch, setNameSearch] = useState('') ;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  }
  const goFavMovie = () =>{
    navigate('/favMovie');
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
      <Image image={png} />
      <p onClick={goMain}>{props.title}</p>
      <div className='searchBlock'>
        <input className='searchField' value={nameSearch} onChange={setNameSrch} placeholder= 'Наименование фильма'></input>
        <button className='buttonSearch' onClick={goSearchResult}>🔎</button>
      </div>
      <button className='buttonFavMovie' onClick={goFavMovie}>Избранное</button>
      {/* <FavMovie /> */}
    </header>
  );
}

export default Header;