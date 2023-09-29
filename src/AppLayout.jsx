import { useEffect, useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SearchedMovies from "./components/SearchedMovies";

export const PostContext = createContext();

const KEY = "6a2bfe75";

function AppLayout() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieByID, setMovieByID] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`,
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (search.length < 3) {
      setMovies([]);
      setError("");
    }
    fetchMovies();
  }, [search]);

  useEffect(() => {
    async function fetchMoviesByID() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`,
        );

        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovieByID((prevData) => [...prevData, data]);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesByID();
  }, [selectedID]);

  return (
    <PostContext.Provider
      value={{
        setSearch,
        search,
        open,
        setOpen,
        movies,
        isLoading,
        error,
        selectedID,
        setSelectedID,
        movieByID,
        setMovieByID,
      }}
    >
      <div>
        <Header />
        {search.length > 2 && (
          <div>
            <SearchedMovies />
          </div>
        )}

        <main className={`${isLoading ? "opacity-25 grayscale" : ""} `}>
          <Outlet />
        </main>
      </div>
    </PostContext.Provider>
  );
}

export default AppLayout;
