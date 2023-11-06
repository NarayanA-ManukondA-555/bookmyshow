import React from "react";
import Slider from "react-slick";
// component
import Poster from "../Poster/Poster.component";

import settings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

const Premier = () => {
  return(
    <>
     <div>
       <div className="flex flex-col items-start py-1">
        <h3 className="text-white text-2xl font-bold">Premieres</h3>
        <p className="text-white">Brand new releases every friday</p>
       </div>
       <div>
         <Slider {...settings}>
          {
            PremierImages.map((image) => (
              <Poster {...image} isDark />
            ))
          }
         </Slider>
       </div>
     </div>
    </>
  );
};

export default Premier;
