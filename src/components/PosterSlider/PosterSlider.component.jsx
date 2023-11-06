import React from "react";
import Poster from "../Poster/Poster.component";
import settings from "../../config/PosterCarousel.config";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return(
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-start py-1">
         <h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800" }`
         }>{props.title}</h3>
         <p className={`${ props.isDark ? "text-white" : "text-gray-800" }`
         }>{props.subtitle}</p>
        </div>
        <div>
          <Slider {...settings}>
           {
             props.images.map((image) => (
               <Poster {...image} isDark={props.isDark}/>
             ))
           }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PosterSlider;
