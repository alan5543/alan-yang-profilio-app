import React, { useState, useMemo } from 'react';
import './webSlider.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ProjectCard from '../projectItem/projectItem';

const WebSlider = ({ cards }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => (
    <div
      className="arrow next"
      onClick={onClick}
      role="button"
      aria-label="Next slide"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <FaArrowRight className="FaArrowRight" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="arrow prev"
      onClick={onClick}
      role="button"
      aria-label="Previous slide"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <FaArrowLeft className="FaArrowLeft" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const renderedCards = useMemo(() => {
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      return null;
    }
    return cards.map((info, idx) => (
      <div
        className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
        key={info.id || idx}
      >
        <ProjectCard info={info} />
      </div>
    ));
  }, [cards, imageIndex]);

  return (
    <div className="WebSlider">
      {renderedCards ? (
        <Slider {...settings} className="sliderContainer">
          {renderedCards}
        </Slider>
      ) : (
        <div className="no-projects">No projects available</div>
      )}
    </div>
  );
};

WebSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default WebSlider;