import { useContext } from "react";
import { PostContext } from "../AppLayout";
import Movie from "./Movie";

function MovieList() {
  const { movies } = useContext(PostContext);

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
