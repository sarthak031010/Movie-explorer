import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const apikey = import.meta.env.VITE_TMDB_KEY;

function Johnnyenglish() {
  const { kesh } = useParams();
  const [movie, setMovie] = useState(null);
  const [tab, setTab] = useState("");
  const [cast, setCast] = useState([]);

  const addFavorite = () => {
    const newMovie = {
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      img: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    };

    const oldData = JSON.parse(localStorage.getItem("FavoriteMovies")) || [];
    const alreadyExist = oldData.some((item) => item.id === movie.id);

    if (alreadyExist) {
      alert(" ⚠️ Already Added To Favorites");
      return;
    }
    const updated = [...oldData, newMovie];

    localStorage.setItem("FavoriteMovies", JSON.stringify(updated));
    alert("✅ Added To Favorites...!");
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${kesh}?api_key=${apikey}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    //movie > credit  ......... credit api hi = cast api

    fetch(
      `https://api.themoviedb.org/3/movie/${kesh}/credits?api_key=${apikey}`,
    )
      .then((res) => res.json())
      .then((data) => setCast(data.cast.slice(0, 8)));
  }, [kesh]);

  if (!movie)
    return <p className="ml-170 mt-96 text-4xl text-red-700 ">Loading...</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/home">
          <span className="text-xl">
            <svg
              className="
                   w-5 h-5 
                   sm:w-6 sm:h-6 
                   md:w-7 md:h-7 
                   lg:w-8 lg:h-8 
                   text-white 
                   cursor-pointer 
                   hover:text-blue-600 
                   transition
                 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </span>
        </Link>
        <h1 className="text-lg font-semibold hover:text-blue-600">Detail</h1>
        <button onClick={addFavorite}>
          <svg
            className="
            w-5 h-5 
            sm:w-6 sm:h-6 
            md:w-7 md:h-7 
            lg:w-8 lg:h-8 
            text-white
            hover:text-blue-600
          "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
            />
          </svg>
        </button>
      </div>

      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="banner"
          className="w-full h-[220px] md:h-[300px] object-cover"
        />

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="poster"
          className="absolute -bottom-16 left-4 w-28 h-40 md:w-36 md:h-52 rounded-xl border-2 border-white shadow-lg"
        />
      </div>

      <div className="px-4 pt-20 max-w-5xl mx-auto">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">{movie.title}</h2>
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
        </div>

        <div className="flex gap-4 text-gray-400 text-sm mt-2">
          <span>📅 {movie.release_date}</span>
          <span>⏱ {movie.runtime} min</span>
          <span>🎬 {movie.genres?.[0]?.name}</span>
        </div>

        <div className="flex gap-6 mt-6 border-b border-gray-700">
          <button
            onClick={() => setTab("about")}
            className={`pb-2 ${
              tab === "about"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400"
            }`}
          >
            About Movie
          </button>

          <button
            onClick={() => setTab("cast")}
            className={`pb-2 ${
              tab === "cast"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400"
            }`}
          >
            Cast
          </button>
        </div>

        <div className="mt-6 bg-gray-800 p-4 md:p-6 rounded-xl">
          {tab === "about" && (
            <p className="text-gray-300 mb-5 text-sm md:text-base leading-relaxed">
              {movie.overview}
            </p>
          )}

          {tab === "cast" && (
            <div className="grid grid-cols-2 mb-6 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {cast.map((actor) => (
                <div key={actor.id}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/100"
                    }
                    className="w-20 h-20 mx-auto rounded-full object-cover mb-2"
                  />
                  <p className="text-sm text-gray-300">{actor.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-around py-3">
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorite">Watchlist</Link>
      </div>
    </div>
  );
}

export default Johnnyenglish;
