import React, { useState } from "react";
import MovieModal from "./Modal"; 

 function Search() {
  const API_KEY = "d0e688fc82a2089100e1761782394c09";
  const BASE_MOVIE_URL = "https://api.themoviedb.org/3";
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  

  
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

 
  const handleSearchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_MOVIE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setSearchedMovie(data.results); 
      setError(null);
      setIsModalOpen(true); 
    } catch (error) {
      console.error("Search failed:", error);
      setSearchedMovie([]);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  
  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
      <div className="search-bar" style={{ gap: "5px", alignItems: "center" }}>
        <div id="input">
          <input onChange={handleQuery} value={query} id="amount-input" placeholder="Search Movies, Series..." />
           <button className="search-button" onClick={handleSearchMovies}>
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>

      {/* Modal to show search results */}
      <MovieModal
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        movies={searchedMovie} 
      />
    </>
  );
}

export default Search
