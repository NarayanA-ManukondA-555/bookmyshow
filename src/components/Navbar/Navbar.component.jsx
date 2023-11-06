import React from "react";
import { BiChevronRight, BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
//import { Link } from "react-router-dom";
function NavSm() {
return (
<>
<div className="text-white flex items-center justify-between">
   <div>
      <h3 className="text-2xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-300 text-xs font-medium flex items-center cursor-pointer hover:text-white">
         Delhi-NCR
         <div className="w-4 h-4 pt-0.5">
            <BiChevronRight className="w-full h-full" />
         </div>
      </span>
   </div>
   <div className="flex items-center space-x-4 ...">
      <div className="">
         <button className="bg-rose-500 p-2 pt-1.5 rounded-md text-xs font-bold">Use App</button>
      </div>
      <div className="w-6 h-6">
         <BiSearch className="w-full h-full" />
      </div>
   </div>
</div>
</>
);
}
function NavMd() {
return (
<>
<div className="w-full flex items-center bg-white rounded-sm">
   <BiSearch className="m-2" />
   <input type="search"
      className="w-full outline-none"
      placeholder="Search for Movies, Events, Plays, Sports and Activities" />
</div>
</>
);
}
function NavLg() {
return (
<>
<div className="container flex items-center justify-between mx-auto px-4 py-2">
   <div className="flex items-center w-1/2 gap-12">
      <div className="flex items-center w-22 h-9" >
         <h3 className="text-xl text-white">book</h3>
         <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full pt-1"
            />
         <h3 className="text-xl text-white">show</h3>
      </div>
      <div className="w-full flex items-center bg-white rounded-sm">
         <BiSearch className="m-2 text-gray-500" />
         <input type="search"
            className="w-full outline-none"
            placeholder="Search for movies, events, plays, sports and activities" />
      </div>
   </div>
   <div className="flex items-center gap-5">
      <div>
         <span className="text-gray-300 text-sm font-medium flex items-center cursor-pointer hover:text-white">
            Delhi-NCR
            <div className="w-4 h-4 pt-0.5">
               <BiChevronDown className="w-full h-full" />
            </div>
         </span>
      </div>
      <div>
         <div className="">
            <button className="bg-rose-500 p-1.5 pt-1.5 px-4 rounded-md text-black text-sm font-medium">Sign in</button>
         </div>
      </div>
      <div className="w-8 h-8">
         <BiMenu className="w-full h-full text-gray-300"/>
      </div>
   </div>
</div>
</>
);
}
// Main Component
const Navbar = () => {
return (
<nav className="bg-sky-950 px-4 py-2">
   {/* Mobile Screen NavBar */}
   <div className="md:hidden">
      <NavSm />
   </div>
   {/* Medium/Tab Screen NavBar */}
   <div className="hidden md:flex lg:hidden">
      <NavMd />
   </div>
   {/* Large Screen NavBar */}
   <div className="hidden md:hidden lg:flex">
      <NavLg />
   </div>
</nav>
);
};
export default Navbar;
