import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel=()=>{
  const settingsLg = {
    centerMode: true,
    centerPadding: "100px",
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

const images=[
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690793879048_motogpbharat2023desktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692348338226_lollapaloozadesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690965948939_virdasreviseddesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1691043871940_zakirkhandesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692343149581_dcmoviesdesktop.jpg"
];

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
        {
          images.map((image) => (
            <div className="w-full h-56 md:h-96 py-3">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))
        }
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
        {
          images.map((image) => (
            <div className="w-full h-80 px-1 py-2">
              <img src={image} alt="testing" className="w-full h-full rounded" />
            </div>
          ))
        }
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCarousel;
