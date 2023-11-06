import React from "react";

const PlaysPosterCard = (props) => {
  return(
    <>
     <div className="flex flex-col items-start gap-4">
       <div className="h-80">
        <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
       </div>
       <div className="flex flex-col items-start">
        <div>
         <h3
         className={`text-lg font-medium ${
           props.isDark ? "text-white" : "text-gray-950"
         }`}>{props.title}</h3>

         <p
         className={`text-base ${
           props.isDark ? "text-white" : "text-gray-700"
         }`}>{props.subtitle}</p>

         <p
         className={`text-base ${
           props.isDark ? "text-white" : "text-gray-700"
         }`}>{props.language}</p>

         <p
         className={`${
           props.isDark ? "text-white" : "text-gray-700"
         }`}>{props.cost}</p>
        </div>
       </div>
     </div>
    </>
  );
};

export default PlaysPosterCard;
