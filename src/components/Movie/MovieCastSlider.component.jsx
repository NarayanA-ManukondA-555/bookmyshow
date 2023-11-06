import React from "react";
import Slider from "react-slick";


const MovieCastPosterCard = (props) => {
  return(
    <>
     <div className="flex flex-col items-center gap-1 m-3">
      <div className="w-full h-30">
          <img
            src={props.src}
            alt={props.title}
            className="w-full h-full rounded-full"
          />
      </div>
      <div>
        <h3
        className={`text-base text-center font-medium ${
          props.isDark ? "text-white" : "text-black"
        }`}>{props.title}</h3>
      </div>
      <div>
        <p
        className={`text-sm ${
          props.isDark ? "text-white" : "text-gray-700"
        }`}>{props.subtitle}</p>
      </div>
     </div>
    </>
  );
};


const MovieCastSlider = (props) => {
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0
  };

  return(
   <>
    <div className="">
     <div className="flex flex-col items-start py-1">
      <div>
        <h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800" }`
        }>{props.title}</h3>
      </div>
      <div>
        <p className={`${ props.isDark ? "text-white" : "text-gray-800" }`
        }>{props.subtitle}</p>
      </div>
     </div>
     <div className="">
       <Slider {...settings}>
        {
          props.images.map((image) => (
            <MovieCastPosterCard {...image} isDark={props.isDark}/>
          ))
        }
       </Slider>
     </div>
    </div>
   </>
  );
};

export default MovieCastSlider;
