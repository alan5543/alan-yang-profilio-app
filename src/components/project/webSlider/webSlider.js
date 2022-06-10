import React, { useState } from 'react'
import './webSlider.css'
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import ProjectCard from '../projectItem/projectItem'


const WebSlider = ({cards}) => {

    const [imageIndex, setImageIndex] = useState(0)

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight className='FaArrowRight'/>
            </div>
        );
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft className='FaArrowLeft'/>
            </div>
        );
    }


    var settings = {
        infinite: true,
        speed: 300,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 1,
              infinite: true,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 1170,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
              infinite: true,
              arrows: false,
              dots: true
            }
          }
          ,
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              arrows: false,
              dots: true
            }
          }
        ]
      };


  return (
    <div className='WebSlider'>
    <Slider {...settings} className='sliderContainer'>
        {cards.map((info, idx) => {
            return (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={imageIndex}>
                    <ProjectCard info={info} />
                </div>
            );
        })}
    </Slider>
  </div>
  )
}

export default WebSlider