import React from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";

import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";
import EventPage from "./pages/Event.page";
import NoPage from "./pages/No.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios defaultsettings
axios.defaults.baseURL = "https://www.themoviedb.org";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/movie/:id" element={<MoviePage />} />
         <Route path="/plays" element={<PlaysPage />} />
         <Route path="/events" element={<EventPage />} />
         <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
