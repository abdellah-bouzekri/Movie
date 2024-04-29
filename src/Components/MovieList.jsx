import React from "react";
import movies from "./DataMovies";
import { Link } from "react-router-dom";

export default function MovieList() {
  const randomMovies = getRandomMovies(movies, 6);

  return (
    <>
      <div className="flex justify-center p-3">
        <button
          class="select-none rounded-lg bg-blue-800 py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          You may also Like
        </button>
      </div>
      <div className="hero min-h-screen bg-white flex justify-center gap-3 flex-wrap lg:flex-nowrap">
        {randomMovies.map((movie) => (
          <Link to="/">
            <div key={movie.id} className="relative group">
              <img
                src={movie.image_source}
                alt={movie.name}
                className="w-full h-auto object-cover rounded-lg shadow-2xl transition-opacity duration-300 group-hover:opacity-70"
                style={{ maxWidth: "230px" }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-75 rounded-lg">
                <p className="text-white text-center">{movie.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function getRandomMovies(movies, count) {
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, count);
}
