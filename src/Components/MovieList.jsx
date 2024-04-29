import React from "react";
import movies from "./DataMovies";
import { Link } from "react-router-dom";

export default function MovieList() {
  const randomMovies = getRandomMovies(movies, 6);

  return (
    <>
      <h3 className="  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        You may Also like
      </h3>
      <Link to="/">
        <div className="hero min-h-screen bg-white flex justify-center gap-3 flex-wrap lg:flex-nowrap">
          {randomMovies.map((movie) => (
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
          ))}
        </div>
      </Link>
    </>
  );
}

function getRandomMovies(movies, count) {
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  return shuffledMovies.slice(0, count);
}
