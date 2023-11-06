import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayoutHoc = (Component) => ({...props}) => {
  return(
   <>
    <div>
      <Navbar />
      <HeroCarousel />
      <Component {...props} />
      <div>Footer</div>
    </div>
   </>
  );
};

export default DefaultLayoutHoc;
