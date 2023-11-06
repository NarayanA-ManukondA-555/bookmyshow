import React from "react";
import PlaysPosterCard from "./PlaysPosterCard.component";
import settings from "./settings.component";
import Slider from "react-slick";

const PlaysPosterSlider = (props) => {
  return(
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-start py-1">
         <div className="">
           <h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800" }`
           }>{props.title}</h3>

           <p className={`text-base ${ props.isDark ? "text-white" : "text-gray-800" }`
           }>{props.subtitle}</p>

           <p className={`text-base ${ props.isDark ? "text-white" : "text-gray-700" }`
           }>{props.language}</p>

           <p className={`${ props.isDark ? "text-white" : "text-gray-700" }`
           }>{props.cost}</p>
         </div>
        </div>
        <div>
          <Slider {...settings}>
           {
             props.images.map((image) => (
               <PlaysPosterCard {...image} isDark={props.isDark}/>
             ))
           }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PlaysPosterSlider;
