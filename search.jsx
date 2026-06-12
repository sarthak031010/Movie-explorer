import React, { useState } from "react";
import { Link } from "react-router-dom";
const apikey = import.meta.env.VITE_TMDB_KEY;

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data.results || []);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white px-3 sm:px-6 md:px-10 py-4">
      <div className="flex items-center justify-evenly">
        <Link to="/home">
          <svg
            className="w-7 h-7 text-gray-800 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 8-4 4 4 4"
            />
          </svg>
        </Link>

        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center flex-1">
          Search
        </h1>

        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <div className="flex items-center bg-gray-700 rounded-3xl relative px-4 py-2 mt-6">
        <input
          type="text"
          placeholder="Search movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent p-3 sm:p-3 md:p-4 text-sm sm:text-base rounded-3xl outline-none"
        />

        <svg
          className="w-6 h-6 text-gray-400 items-center absolute right-4 cursor-pointer"
          onClick={handleSearch}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <div className="mt-6 space-y-4">
        {result.length > 0 ? (
          result.map((movie) => (
            <div
              key={movie.id}
              className="flex gap-4 bg-gray-800 p-3 rounded-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="sm:w-20 w-10 h-24 sm:h-28 rounded-lg object-cover"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-sm sm:text-base font-semibold capitalize">
                  {movie.title}
                </h2>

                <p className="text-yellow-400 text-xs sm:text-sm">
                  ⭐ {movie.rating || "N/A"}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm">
                  📅 {movie.year || "N/A"}
                </p>

                <p className="text-gray-400 text-xs">⏱ {movie.time || "N/A"}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center mt-20">
            No movie found <br />
            try again
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
