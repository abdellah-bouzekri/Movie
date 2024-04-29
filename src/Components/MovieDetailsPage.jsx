import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function MovieDetailsPage({ movies }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Loading the rating from local storage when the component mounts
    const storedRating = localStorage.getItem("movieRating");
    if (storedRating) {
      setRating(parseInt(storedRating));
    }
  }, []);

  const handleRatingChange = (value) => {
    // Updating the rating state and store it in local storage
    setRating(value);
    localStorage.setItem("movieRating", value);
  };

  // Using useParams to access route parameters
  const { id } = useParams();
  // Finding the movie object based on the id
  const movie = movies.find((movie) => movie.id === parseInt(id));
  // Checking if movie is found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-slate-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={movie.image_source}
            alt={movie.name}
            width={300}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-4 md:mx-8">
            <h1 className="text-4xl md:text-6xl font-bold">{movie.name}</h1>
            <p className="py-4 md:py-6 text-base md:text-lg">
              {movie.description}
            </p>
            <div className="flex flex-wrap gap-2 text-base md:text-lg">
              <strong>Release Date:</strong> {movie.release_date} |
              <strong>Runtime:</strong> {movie.runtime} |<strong>Cast:</strong>{" "}
              {movie.cast.join(", ")}
            </div>
            <button className="btn btn-primary mt-4">Watch Trailer</button>
          </div>
        </div>
      </div>
      <MovieList />
    </>
  );
}

export default MovieDetailsPage;
