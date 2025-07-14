import React from "react";
import Header from '../header/header'
import './moviePage.css'
import back from '../assets/back.png'
import poster from '../assets/noposter.png'

function MoviePage() {
  return (
    <div className="moviepage">
        {/* <h1>Movie Page</h1> */}
        <div className="desc_and_logo">
            <div className="descrptn">
                <p className="descTitle">title title title title title title</p>
                <p className="descData">year oldRtng mvieLngth rtng</p>
            <div className="buttons">
                <button className="button1">Button 1</button>
                <button className="button2">Button 2</button>
                <button className="button3">Button 3</button>
            </div>
            </div>
            <img className="posterLogo" src={poster} />
        </div>
    </div>
  );
}

export default MoviePage;