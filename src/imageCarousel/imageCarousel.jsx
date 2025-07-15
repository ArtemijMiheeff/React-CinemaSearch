import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageCarousel.css'

function ImageCrousel({images})
{
    const settings = {
    dots: true,          // Показывать точки навигации
    infinite: true,      // Бесконечная прокрутка
    speed: 400,          // Скорость анимации
    slidesToShow: 1,      // Количество слайдов для показа
    slidesToScroll: 1,      // Количество слайдов для прокрутки
    autoplay: true,       // Автоматическая прокрутка
    autoplaySpeed: 3000,  // Интервал между слайдами (мс)
    pauseOnHover: true,    // Пауза при наведении мыши
    arrows: false,          // Показывать стрелки навигации
    className: "carousel", // Добавляем класс carousel
  };
    return(
        <div className='carouselBlock'>
            <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index} className="carousel-item">
                <img src={image} alt={`Slide ${index + 1}`} />
            </div>
            ))}
            </Slider>
        </div>
    )
}

export default ImageCrousel;