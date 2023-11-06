import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const MovieInfo = () => {
  return(
    <>
     <div className="space-y-4">
      <div className="pb-2 pt-6">
        <h1 className="text-white text-4xl font-bold">Mastaney</h1>
      </div>
      <div className="text-white">
        <span className="flex items-end gap-2">
          <div className="w-8 h-8"><AiFillStar className="w-full h-full"/></div>
          <h4 className="text-2xl font-semibold">9/10</h4>
          <h6 className="text-md">29.7K Votes</h6>
          <div className="w-5 h-6 pt-1"><BiChevronRight className="w-full h-full "/></div>
        </span>
      </div>
      <div className="flex items-center justify-items-center gap-16 px-5 py-3 bg-stone-700 rounded-lg">
        <div>
          <h4 className="text-white text-lg font-bold">Add your rating & review</h4>
          <h6 className="text-gray-300 text-md font-semibold">Your ratings matter</h6>
        </div>
        <div>
          <button className="text-xl text-black font-semibold px-3 py-2 bg-white rounded-lg">Rate now</button>
        </div>
      </div>
      <div className="text-black font-medium flex items-start gap-2">
        <div>
          <h6 className="px-1 py-0.5 bg-gray-200 rounded hover:underline underline-offset-1">2D</h6>
        </div>
        <div className="px-1 py-0.5 bg-gray-200 rounded flex items-start">
          <h6 className="hover:underline underline-offset-1">Punjabi,</h6>
          <h6 className="hover:underline underline-offset-1 ml-1">Hindi</h6>
        </div>
      </div>
      <div className="text-lg text-white">
        <ul className="flex items-start gap-2">
          <li>2h 25m</li>
          <li>
            <div className="flex items-start">
              <div className="hover:underline underline-offset-1">Action,</div>
              <div className="hover:underline underline-offset-1 ml-1">Drama,</div>
              <div className="hover:underline underline-offset-1 ml-1">Period</div>
            </div>
          </li>
          <li>UA</li>
          <li>25 Aug,2023</li>
        </ul>
      </div>
      <div className="pt-4">
        <button className="text-lg text-black font-semibold px-16 py-3 bg-rose-500 rounded-lg">Book tickets</button>
      </div>
     </div>
    </>
  );
};

export default MovieInfo;
