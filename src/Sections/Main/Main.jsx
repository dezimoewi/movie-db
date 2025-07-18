import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { fetchMovieOne } from "../../Context/context";
import { fetchMovieTwo } from "../../Context/context";
import { fetchMovieThree } from "../../Context/context";
import Comedy from "../../Components/Comedy";
import RomanceMovies from "../../Components/Romance";
import TopSearch from "../../Components/TopSearch";

function Main() {
  const [release, setrelease] = useState([]);
  const navigate = useNavigate(); 
  const [action, setAction] = useState([]);
  const [comedy, setComedy] = useState([]);

  //  move handleMovieClick inside the component
  const handleMovieClick = (movie) => {
    navigate(`/Details/${movie.id}`, { state: { movie } });
  };

  useEffect(() => {
    getMovieOne();
  }, []);

  async function getMovieOne() {
    const release = await fetchMovieOne();
    console.log(release);
    setrelease(release);
  }

   useEffect(() => {
    getMovieTwo();
  }, []);
  async function getMovieTwo() {
    const action = await fetchMovieTwo();
    console.log(action);
    setAction(action);
  }

useEffect(() => {
    getMovieThree();
  }, []);
  async function getMovieThree() {
    const comedy = await fetchMovieThree();
    console.log(comedy);
    setComedy(comedy);
  }

  return (

    <>

    <div className="action">
      <h2>Top Search</h2>
      <div className="movies">
        {release.map((movie) => (
          <div
            className="action-movies"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <TopSearch movie={movie} />
          </div>
        ))}
      </div>
    </div>

      <div className="action">
      <h2>Top Search</h2>
      <div className="movies">
        {release.map((movie) => (
          <div
            className="action-movies"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <TopSearch movie={movie} />
          </div>
        ))}
      </div>
    </div>

    <div className="romance">
        <h2>Romance & Drama</h2>
        <div className="movies">
          {action.map((movie) => (
            <div
              className="romance-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <RomanceMovies movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <div className="comedy">
        <h2>Comedy</h2>
        <div className="movies">
          {comedy.map((movie) => (
            <div
              className="comedy-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <Comedy movie={movie} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Main;
