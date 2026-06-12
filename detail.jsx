import React, { useState } from "react";
import { Link } from "react-router-dom";

function Detail() {
  const [tab, setTab] = useState("About");

  const addFavorite = () => {
    const movie = {
      title: "Avengers",
      img: "/photos/avangers.webp",
      rating: "8.5",
    };

    const oldData = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    localStorage.setItem("favoriteMovies", JSON.stringify([...oldData, movie]));
  };

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
    hover:text-blue-400 
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
        <h1 className="text-lg font-semibold">Detail</h1>
        <button onClick={addFavorite}>
          <svg
            className="
    w-5 h-5 
    sm:w-6 sm:h-6 
    md:w-7 md:h-7 
    lg:w-8 lg:h-8 
    text-white
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
          src="/photos/avangers.webp"
          alt="banner"
          className="w-full h-[220px] md:h-[300px] object-cover"
        />

        <img
          src="/photos/avangers.webp"
          alt="poster"
          className="absolute -bottom-16 left-4 w-28 h-40 md:w-36 md:h-52 rounded-xl border-2 border-white shadow-lg"
        />
      </div>

      <div className="px-4 pt-20 max-w-5xl mx-auto">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">Avengers</h2>
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold">
            ⭐ 8.5
          </span>
        </div>

        <div className="flex gap-4 text-gray-400 text-sm mt-2">
          <span>📅 2012</span>
          <span>⏱ 143 min</span>
          <span>🎬 Action</span>
        </div>

        <div className="flex gap-6 mt-6 border-b border-gray-700">
          <button
            onClick={() => setTab("About")}
            className={`pb-2 ${
              tab === "About"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400"
            }`}
          >
            About Movie
          </button>

          <button
            onClick={() => setTab("Cast")}
            className={`pb-2 ${
              tab === "Cast"
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400"
            }`}
          >
            Cast
          </button>
        </div>

        <div className="mt-6 bg-gray-800 p-4 md:p-6 rounded-xl">
          {tab === "About" && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The Avengers (2012), directed by Joss Whedon, is a Marvel
              superhero film where Iron Man, Captain America, Hulk, Thor, Black
              Widow, and Hawkeye unite to stop Loki.
            </p>
          )}

          {tab === "Cast" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[
                {
                  name: "Robert Downey Jr.",
                  img: "/photos/hero1.jfif/",
                },
                { name: "Chris Evans", img: "public/photos/hero2.jfif" },
              ].map((actor, i) => (
                <div key={i}>
                  <img
                    src={actor.img}
                    alt="actor"
                    className="w-20 h-20 mx-auto rounded-full object-cover mb-2"
                  />
                  <p className="text-sm text-gray-300">{actor.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
