import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiKey = import.meta.env.VITE_TMDB_KEY;

function Home() {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, [category]);

  //  const handleCategory = (category) => {
  //  fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
  //    .then((res) => res.json())
  //    .then((data) => {
  //      if (Array.isArray(data.results)) setMovies(data.results);
  //      else setMovies([]);
  //      setCategory(category);
  //      console.log("Movies: ", data.results);
  //      console.log("category: ", category);
  //    })
  //    .catch((err) => console.log("err"));
  // };

  const Slidemovies = [
    { id: 1, title: "Avenger", src: "/photos/avangers.webp" },
    { id: 2, title: "Avatar ", src: "/photos/Avatar_(2009_film)_poster.jpg" },
    { id: 3, title: "EndGame ", src: "/photos/endgame.jpg" },
    { id: 4, title: "EvilDead ", src: "/photos/evil-dead.jpg" },
    { id: 5, title: "Extraction ", src: "/photos/extraction.png" },
    {
      id: 6,
      title: "JhonnyEnglish ",
      src: "/photos/jhonny english.jpg",
    },
    {
      id: 7,
      title: "TokiyoDrift ",
      src: "/photos/tokiyo drift.jpg",
    },
    { id: 8, title: "fast5", src: "/photos/fast and.jpg" },
    { id: 9, title: "ghostrider", src: "/photos/ghostrider.webp" },
    { id: 10, title: "iceage", src: "/photos/iceage.webp" },
    { id: 11, title: "jumangi", src: "/photos/jumangi.jpg" },
    { id: 12, title: "jungle", src: "/photos/Jungle2017poster.jpg" },
    { id: 13, title: "mrbean", src: "/photos/mr.bean.jpg" },
    {
      id: 14,
      title: "spiderman",
      src: "/photos/small-poster-amazing-spiderman-movie-sla87-wall-poster-13x19-original-image2rxz3dsqt9f.webp",
    },
    {
      id: 15,
      title: "batman",
      src: "/photos/small-poster-batman-comic-sl1021-wall-poster-13x19-inches-matte-original-imagdqezg54numtv.webp",
    },
    { id: 16, title: "terminator", src: "/photos/terminaotr.jpg" },
    { id: 17, title: "tag", src: "/photos/tomand jerry.jpg" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 pb-20">
      <h1 className="text-2xl md:text-3xl font-semibold">
        What do you want to watch?
      </h1>

      <Link to="/search">
        <div className="flex relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full mt-4 p-3 rounded-3xl bg-gray-700 outline-none"
          />
        </div>
      </Link>

      <div className="flex gap-6 overflow-x-auto mt-6">
        {Slidemovies.map((movie, index) => (
          <div key={movie.id} className="relative flex-shrink-0">
            <span className="absolute -bottom-10 -left-4 text-[70px] font-extrabold text-gray-600">
              {index + 1}
            </span>
            <img
              src={movie.src}
              className="w-32 h-48 rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-evenly mt-10 mb-6 text-sm md:text-lg font-bold">
        <button
          onClick={() => setCategory("now_playing")}
          className={`${
            category === "now_playing"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-white"
          }`}
        >
          Now Playing
        </button>

        <button
          onClick={() => setCategory("upcoming")}
          className={`${
            category === "upcoming"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-white"
          }`}
        >
          Upcoming
        </button>

        <button
          onClick={() => setCategory("top_rated")}
          className={`${
            category === "top_rated"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-white"
          }`}
        >
          Top Rated
        </button>

        <button
          onClick={() => setCategory("popular")}
          className={`${
            category === "popular"
              ? "border-b-2 border-blue-500 text-blue-400"
              : "text-white"
          }`}
        >
          Popular
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-2 text-center">
              <h2 className="text-sm text-amber-300 font-semibold">
                {movie.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gray-800 flex justify-around py-3">
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorite">Watchlist</Link>
      </div>
    </div>
  );
}

export default Home;
