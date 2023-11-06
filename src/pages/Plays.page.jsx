import React from "react";
import DefaultLayoutHoc from "../layouts/Default.layout.Hoc";
import PlaysFilters from "../components/Plays/PlaysFilters.component";
import PlaysPosterSlider from "../components/Plays/PlaysPosterSlider.component";
import PlaysPosters from "../components/Plays/TempPlaysPosters.config.js";
import PlaysPosters2 from "../components/Plays/TempPlaysPosters2.config.js";

function PlaysPage() {
  return(
    <>
     <div className="bg-gray-100">
      <div className="container mx-auto flex items-start gap-8">
        <div className="w-1/4 mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Filters</h2>
          <div className="w-full space-y-3">
            <PlaysFilters title="Date" tags={["Today", "Tomarrow", "This Weekend"]} clear="Clear" />
            <PlaysFilters title="Language" tags={["Hindi", "English", "Urdu", "Hindustani", "Marathi", "Silent", "Assamese", "Bengali", "Bhojpuri", "Komkani"]} clear="Clear" />
            <PlaysFilters title="Categories" tags={["Theatre", "Storytelling", "Puppetry"]} clear="Clear" />
            <PlaysFilters title="Genres" tags={["Drama", "Comedy", "Musical", "Classic", "Adaption", "Biography", "Thriller", "Adult", "Contemporary", "Mystery", "Mythological", "Romantic", "Suspense", "Horror"]} clear="Clear" />
            <PlaysFilters title="More Filters" tags={["Outdoor Events", "Fast Filling", "Kids Allowed", "Must Attend", "Online Streaming"]} clear="Clear" />
            <PlaysFilters title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} clear="Clear" />
            <div className="w-full border border-red-600 py-1 text-center rounded">
              <button className="text-red-600">Browse by venues</button>
            </div>
          </div>
        </div>
        <div className="w-3/4 mt-8">
         <div className="flex flex-col items-start">
           <div className="flex flex-col items-start gap-8 ml-4">
            <div><h3 className="text-2xl font-bold text-gray-600">Plays in Delhi-NCR</h3></div>
            <div className="flex items-start gap-2">
            <button className="text-red-600 text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-full">Theatre</button>
            <button className="text-red-600 text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-full">Storytelling</button>
            <button className="text-red-600 text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-full">Puppetry</button>
            </div>
           </div>
           <PlaysPosterSlider images={PlaysPosters}
              title=""
              subtitle=""
              isDark={false} />
           <PlaysPosterSlider images={PlaysPosters2}
              title=""
              subtitle=""
              isDark={false} />
         </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default DefaultLayoutHoc(PlaysPage);
