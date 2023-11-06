import React from "react";
import MovieLayoutHoc from "../layouts/Movie.layout.Hoc";
import Movie from "../components/Movie/Movie.component";

const MoviePage = () => {
return(
<>
<div>
  <Movie />
</div>
</>
);
};
export default MovieLayoutHoc(MoviePage);
