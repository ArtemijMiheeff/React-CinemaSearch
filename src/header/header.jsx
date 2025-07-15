import React from 'react';
import './header.css';
import Image from '../image/image.jsx';
import png from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';
import App from '../App.jsx'

function Header(props) {
  const navigate = useNavigate();

  const openMoviePage = () => {
    navigate('/moviepage');
  };
  const goMain = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <Image image={png} />
      <p onClick={goMain}>{props.title}</p>
      {/* <button onClick={openMoviePage}>Movie page</button> */}
    </header>
  );
}

export default Header;