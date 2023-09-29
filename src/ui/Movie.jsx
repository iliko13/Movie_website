import { useContext } from "react";
import { PostContext } from "../AppLayout";

function Movie({ movie }) {
  const { setSelectedID } = useContext(PostContext);

  const handleSelectID = (id) => {
    setSelectedID((selectedID) => (selectedID === id ? null : id));
  };

  const handleCloseMovie = (id) => {
    setSelectedID(null);
  };

  return (
    <li onClick={() => handleSelectID(movie.imdbID)} className="m-2">
      <img
        className="w-full brightness-75 hover:shadow-2xl hover:shadow-indigo-400 hover:brightness-100"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
    </li>
  );
}

export default Movie;
