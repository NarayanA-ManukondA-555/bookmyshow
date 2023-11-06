import React from "react";
import DefaultLayoutHoc from "../layouts/Default.layout.Hoc";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";

function HomePage() {
  return(
    <>
    <div className="flex flex-col space-x-15">
     <div className="container mx-auto px-4 py-8">
      <img
      src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
      alt="Stream"
      className="rounded-xl"
      />
     </div>
     <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-gray-800 font-bold ml-2 my-3">
          The Best Of Live Events
        </h1>
        <EntertainmentCardSlider />
     </div>
     <div className="bg-premierCol-700">
       <div className="container mx-auto px-4 py-6">
          <div className="gap-6">
            <div className="px-8">
              <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                  alt="Premier Heading"
                  className="w-full h-full"
                  />
            </div>
            <div className="">
             <PosterSlider images={TempPosters} title="Premieres" subtitle="Brand new releases every friday" isDark/>
            </div>
          </div>
       </div>
     </div>

     <div className="">
      <PosterSlider images={TempPosters}
       title="Online Streaming Events"
       isDark={false} />
     </div>
    </div>
    </>
  );
}

export default DefaultLayoutHoc(HomePage);
