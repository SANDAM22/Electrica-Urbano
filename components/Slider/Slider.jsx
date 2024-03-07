"use client"
import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/img/BannerUrbano.jpg',
    '/img/logo-sica-860x860.jpg',
    'https://www.reintec.net/images/sica.jpg',
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]); 

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slideImage"
          />
        ))}
      </div>
      <button className="prevButton" onClick={goToPrevSlide}>
        &#10094; 
      </button>
      <button className="nextButton" onClick={goToNextSlide}>
        &#10095; 
      </button>

      <style jsx>{`
        .slider-container {
          width: 98.78vw;
          height: 60vh; 
          overflow: hidden;
          position: relative;
        }

        .slider {
          display: flex;
          width: ${images.length * 100}vw; 
          height: 100%;
          transition: transform 0.75s ease; 
        }

        .slideImage {
          width: 100vw; 
          height: 100%;
          object-fit: cover; 
        }

        .prevButton,
        .nextButton {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1;
        }

        .prevButton {
          left: 0;
        }

        .nextButton {
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default Slider;
