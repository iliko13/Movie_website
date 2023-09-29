import { useContext } from "react";
import { PostContext } from "../AppLayout";
import MovieFavorite from "../ui/movieFavorite";

function Favorites() {
  const { movieByID } = useContext(PostContext);

  return (
    <>
      <div className=" grid h-screen w-screen grid-cols-1 gap-8 overflow-hidden bg-gradient-to-r  from-indigo-900 via-purple-900 to-pink-900  lg:grid-cols-2">
        {movieByID.length === 0 ? (
          <h1 className="flex w-screen animate-pulse items-start justify-center  px-32 pt-16 text-center text-4xl font-bold text-stone-200">
            Start by using our search bar to find movies that pique your
            interest, and then simply click on your favorite movies to have them
            displayed on this page.
          </h1>
        ) : (
          <div className="grid h-screen w-screen grid-cols-1 gap-8 overflow-scroll  overflow-y-visible  bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-6 lg:grid-cols-2">
            {movieByID?.map((movie) => (
              <MovieFavorite movie={movie} key={movie.Title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
