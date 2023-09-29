import { useContext } from "react";
import { PostContext } from "../AppLayout";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import ButtonNav from "../ui/ButtonNav";

function Header() {
  const { search, setSearch, open, setOpen, movieByID } =
    useContext(PostContext);

  const handleMenu = () => {
    setOpen((e) => !e);
  };

  return (
    <div className="mx-auto flex h-20 w-screen items-center justify-between  overflow-hidden 	bg-gradient-to-r from-indigo-800	via-purple-800 to-pink-900 px-4 font-semibold sm:px-6  md:px-8">
      <Link to="/" onClick={() => setSearch("")}>
        <h1 className="flex items-center justify-between font-serif text-base tracking-wide text-stone-300 duration-200 ease-in hover:text-white  sm:text-lg md:pl-1  md:text-xl lg:text-2xl">
          <BiMoviePlay />
          MovieX.ge
        </h1>
      </Link>

      <div className="flex items-center justify-center">
        <input
          value={search}
          className="w-24 rounded-full bg-purple-300 px-4 py-2 text-sm duration-300 ease-in placeholder:text-stone-500 focus:w-44 focus:border-2 focus:border-indigo-900 focus:outline-none sm:w-36 sm:focus:w-52 md:w-52 md:focus:w-72"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoIosSearch className="h-7 w-7 text-purple-300" />
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center justify-between	space-x-10  rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 box-decoration-clone p-3  text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <ButtonNav>
            <Link to="/">Home</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="/trending">Trending</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="favorites">Favorites</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="support">Support</Link>
          </ButtonNav>
        </div>
      </div>

      <div className="-mr-2 flex lg:hidden">
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center justify-center rounded-md text-3xl text-stone-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          {open === true ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      {open ? (
        <div className=" absolute left-0 top-20 z-40 flex h-screen w-full flex-col items-center justify-center space-y-20 bg-gradient-to-r	from-indigo-200 via-purple-200 to-pink-200  text-2xl text-stone-950 lg:hidden	">
          <ButtonNav>
            <Link to="/">Home</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="/trending">Trending</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="favorites">Favorites</Link>
          </ButtonNav>
          <ButtonNav>
            <Link to="support">Support</Link>
          </ButtonNav>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
