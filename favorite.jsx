import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies =
      JSON.parse(localStorage.getItem("FavoriteMovies")) || [];

    setMovies(savedMovies);
  }, []);

  const removeMovie = (index) => {
    const updatedMovies = movies.filter((movie, i) => i !== index);

    setMovies(updatedMovies);

    localStorage.setItem("FavoriteMovies", JSON.stringify(updatedMovies));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-5 pb-24">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/home">
          <svg
            class=" text-gray-800 dark:text-white w-6 h-6 sm:w-7 sm:h-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </Link>

        <h1 className="text-xl sm:text-2xl font-bold flex-1 text-center sm:text-center">
          Watchlist
        </h1>
      </div>

      {movies.length === 0 ? (
        <div className="flex flex-col mt-60 items-center justify-center h-[60vh text-center]">
          <div>
            <svg
              className="w-14 h-14 text-gray-400 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-base sm:text-lg">
            No favorite movies.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-56 sm:h-64 object-cover"
              />

              <div className="p-3 text-center">
                <h2 className="text-base sm:text-xg font-semibold">
                  {movie.title}
                </h2>

                <p className="text-yellow-400 text-sm sm:text-base">
                  ⭐ {movie.rating}
                </p>

                <button
                  onClick={() => removeMovie(index)}
                  className="mt-3 bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-around py-3 text-sm sm:text-base">
        <Link to="/home" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/search" className="hover:text-blue-400">
          Search
        </Link>
        <Link to="/favorite" className="hover:text-blue-400">
          Watchlist
        </Link>
      </div>
    </div>
  );
}

export default Favorite;
