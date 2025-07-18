

import PropTypes from "prop-types";
// import fooddetails from "./pages/fooddetails"
function MoviesRelease({movie}  ) {
  return (
    <div className="two" style={{cursor: 'pointer'}}>
      

        {/* <h2>{movie.original_title}</h2> */}
      <img src= {
        movie.poster_path
        ?`https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'fallback_image_url'} alt={movie.original_title} />
        <h4 className="title-paragraph">{movie.original_title}</h4>
         <h4>{movie.release_date}</h4> 
    </div>
  );
}

MoviesRelease.propTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default MoviesRelease;
