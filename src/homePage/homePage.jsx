import React from "react";
import Movies from '../movies/movies.jsx'
import ImageCrousel from '../imageCarousel/imageCarousel.jsx';
import image1 from '../assets/back.png';
import image2 from '../assets/hunter.png';
import image3 from '../assets/indian.png';
import image4 from '../assets/madmax.png';
import image5 from '../assets/mncrft.png';

function HomePage()
{
    const movies = [image1, image2, image3, image4, image5];

    return(
        <div>
        <ImageCrousel images={movies}/>
        <Movies />
    </div>
    )
}

export default HomePage;