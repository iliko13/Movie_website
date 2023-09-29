import { useContext } from "react";
import { PostContext } from "../AppLayout";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import MovieList from "../ui/MovieList";

function SearchedMovies() {
  const { isLoading, error } = useContext(PostContext);

  return (
    <div className="scroll-smooth ">
      {isLoading && <Loader />}
      {!isLoading && !error && <MovieList />}
      {error && (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 ">
          <ErrorMessage message={error} />
        </div>
      )}
    </div>
  );
}

export default SearchedMovies;
