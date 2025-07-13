import Button from "../../Components/Button";
import Navbar from "../../Components/NavBar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { fetchMovie } from "../../Context/context";
import Movie from "../../Components/Movie";

function Header() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/Details/${movie.id}`, { state: { movie } });
  };

  useEffect(() => {
    getMovie();
  }, []);
  async function getMovie() {
    const movies = await fetchMovie();
    console.log({ movies });
    setMovies(movies);
  }

  return (
    <>
      <header>
        <Navbar />
        <div className="hero-section">
          <img
            src="https://hqebqbizigkkklacymfs.supabase.co/storage/v1/object/sign/dezimo/Spiderman.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNmI3YmIwNi0zNjU1LTRhZDktYjJiMi0wYmNjZTEyMzJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXppbW8vU3BpZGVybWFuLnBuZyIsImlhdCI6MTc1MjI2OTg3MSwiZXhwIjoxNzgzODA1ODcxfQ.gvRIPFflePlz4-GaSa085IXTvlPwI4gt_ZysfCoIhAI"
            alt=""
          />
          <div className="tags">
            <button className="tag">CBFC:U/A</button>
            <span className="tag-span">Action</span>
            <span className="tag-span">Adventure</span>
            <span className="tag-span">2h 28m</span>
          </div>
          <p className="description">
            When a spell goes wrong, dangerous foes from other worlds start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man.
          </p>
          <Button />
        </div>

        <div className="Latest">
          <h2>Latest & Trending</h2>
          <div className="movies">
            {movies.map((movie, index) => (
              <div
                className="latest-movies"
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
              >
                <Movie movie={movie} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
