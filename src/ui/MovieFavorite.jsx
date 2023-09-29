import React, { useContext } from "react";
import { PostContext } from "../AppLayout";
import { GrClose } from "react-icons/gr";

function MovieFavorite({ movie }) {
  const { setMovieByID } = useContext(PostContext);

  const handleRemoveClick = () => {
    // Filter out the movie from the list of favorites
    setMovieByID((prevMovies) =>
      prevMovies.filter((favMovie) => favMovie.imdbID !== movie.imdbID),
    );
  };

  const {
    Title: title,
    Actors: actors,
    BoxOffice: budget,
    Country: country,
    Director: director,
    Genre: genre,
    Plot: plot,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    imdbRating,
  } = movie;

  return (
    <li className="overflow-none relative grid select-none list-none grid-cols-1	gap-0 overflow-y-visible rounded border-2 border-stone-200 bg-gradient-to-r  from-indigo-900 via-purple-900 to-pink-900 text-stone-200 md:max-h-[640px] lg:grid-cols-2">
      <img src={poster} alt={`${title} poster`} />
      <div className="space-y-2 p-3 py-2 pr-1">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <h3>Genre: {genre}</h3>
        <p>
          Released Date: {released}, Duration: {runtime}
        </p>
        <p>Director: {director}</p>
        <p>Actors: {actors}</p>
        <p>
          Budget: {budget}, Country - {country}
        </p>

        <p
          className={`py-2 ${
            imdbRating < 4
              ? "text-red-500"
              : imdbRating < 7
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          <span
            className={`mr-2 rounded p-2 font-bold ${
              imdbRating < 4
                ? "bg-red-500 text-red-50"
                : imdbRating < 7
                ? "bg-yellow-500 text-stone-950"
                : "bg-green-500 text-stone-950"
            }`}
          >
            IMDB
          </span>
          {imdbRating}
        </p>
        <p>{plot}</p>
      </div>
      <button
        onClick={handleRemoveClick}
        className="absolute left-2 top-2 rounded-full bg-red-500 p-2 font-semibold text-white hover:bg-red-600"
      >
        <GrClose />
      </button>
    </li>
  );
}

export default MovieFavorite;
