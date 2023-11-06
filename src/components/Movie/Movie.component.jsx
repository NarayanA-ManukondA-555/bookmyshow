import React from "react";
import { BiPlay, BiShareAlt } from "react-icons/bi";
import MovieInfo from "./MovieInfo.component";
import MovieCastSlider from "./MovieCastSlider.component";
import MovieCastPosters from "./TempMovieCastPosters.config.js";
import MovieCrewPosters from "./TempMovieCrewPosters.config.js";

const Movie = () => {
  return(
    <>
     <div className="md:hidden">
      <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/mastaney-et00349395-1688627292.jpg"
       alt="poster"
       className="" />
     </div>
     <div className="hidden md:block lg:hidden" style={{height: "20rem"}}>
       <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/mastaney-et00349395-1688627292.jpg"
        alt="poster"
        className="w-full h-full" />
     </div>

     <div className="hidden lg:block">
      <div className="" style={{ height: "30rem", backgroundColor: "black" }}>
       <div className="container mx-auto relative">
         <div className="absolute z-1 w-full h-full"
              style={{ backgroundImage:
               "linear-gradient(90deg, rgb(34, 34, 34) 14.95%, rgba(34, 34, 34) 30.3%, rgba(34, 34, 34, 0.90) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)"
             }} />
         <div className="absolute z-2 top-8 container flex items-start justify-between px-4">
           <div className="flex items-start gap-8">
            <div className="flex flex-col items-center justify-items-center">
              <div className="flex flex-col content-center justify-center">
                <div className="w-64 h-96">
                          <img
                            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mastaney-et00349395-1688627292.jpg"
                            alt="Movie Poster"
                            className="w-full h-full rounded-lg"
                          />
                </div>
                <div className="absolute z-3 left-20">
                           <span className="flex items-center p-1 rounded-full text-white font-bold bg-stone-800">
                             <div className="w-6 h-6">
                               <BiPlay className="w-full h-full" />
                             </div>
                             <div><h6>Trailers (2)</h6></div>
                           </span>
                </div>
              </div>
              <div>
                <h6 className="text-sm text-white p-2">In cinemas</h6>
              </div>
            </div>
            <div>
              <MovieInfo />
            </div>
           </div>
           <div className="px-2 py-1 bg-stone-800">
             <span className="text-gray-300 text-xl font-medium gap-2 flex items-center cursor-pointer hover:text-white">
               <div className="w-8 h-8">
                 <BiShareAlt className="w-full h-full" />
               </div>
               <div><h4>Share</h4></div>
             </span>
           </div>
         </div>
         <div className="">
          <img
             src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/mastaney-et00349395-1688627292.jpg"
             alt="backgrond poster"
             className="w-full h-full object-center"
             style={{ height: "30rem" }}/>
         </div>

         <div className="absolute z-3 space-y-8 my-8 lg:w-2/3 ml-2">
            <div className="flex flex-col items-start gap-3">
               <h2 className="text-2xl font-bold">About the movie</h2>
               <p>Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. Nadar demands to arrest them but it doesn`t work out. Five ordinary men are hired to play Sikh Rebellions but over time they learn what Sikhs are and what they stand for. Can they rewrite history?</p>
            </div>
            <hr />
            <div className="flex flex-col items-start gap-5">
               <div><h2 className="text-2xl font-bold">Applicable Offers</h2></div>
               <div className="flex items-start gap-2 w-1/2 p-3 bg-yellow-100 border-2 border-yellow-400 border-dashed rounded-md">
                  <div className="w-10 h-8">
                     <img
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className="w-full h-full"
                        />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                     <h2 className="text-gray-700 text-lg font-bold">Filmy Pass</h2>
                     <p className="text-gray-600 font-medium">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                  </div>
               </div>
            </div>
            <hr />
            <div className="">
              <MovieCastSlider
               images={MovieCastPosters}
               title="Cast"
               isDark={false} />
            </div>
            <hr />
            <div className="">
              <MovieCastSlider
               images={MovieCrewPosters}
               title="Crew"
               isDark={false} />
            </div>
         </div>



       </div>
      </div>
     </div>
    </>
  );
};

export default Movie;
