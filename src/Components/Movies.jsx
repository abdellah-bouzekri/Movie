import movies from "./DataMovies";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import { useState } from "react";

export default function Movies() {
  const [searchResults, setSearchResults] = useState(movies);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
  }

  return (
    <>
      <HeroSection />
      <div id="allMovies" className="max-w-xl mx-auto text-center">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Check Out Our Latest Movie Collection
        </h3>
        <p className="text-gray-600 mt-3">
          Dive into a world of captivating stories and cinematic experiences.
          Explore our handpicked selection of movies curated just for you.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-64 mx-auto mt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>

      <section className="py-14" id="movies-section">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {searchResults.map((movie) => (
                <li
                  key={movie.id}
                  className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                  <Link to={`/moviedetails/${movie.id}`}>
                    <div className="w-full h-96">
                      <img
                        src={movie.image_source}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        alt={movie.name}
                      />
                    </div>
                  </Link>
                  <div className="mt-4">
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {movie.name}
                    </h4>
                    <p className="text-indigo-600">{movie.genre}</p>
                    <div className="mt-3 flex gap-3 text-gray-400 justify-center">
                      <p>Release Date: {movie.release_date}</p>
                      <p>Rating: ⭐{movie.rating}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
