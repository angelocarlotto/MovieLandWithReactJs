import { React, useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=5c4a1bac";

const movie1 = {
  Title: "Spider-Man222",
  Year: "2002",
  imdbID: "tt0145487",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTearm, setSearchTearm] = useState();
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spider");
  }, []);
  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTearm}
            onChange={(e) => setSearchTearm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTearm)}
          />
        </div>

        {movies?.length > 0 ? (
          <>
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie1={movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
