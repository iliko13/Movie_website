import { useContext } from "react";
import { PostContext } from "../AppLayout";

function ButtonNav({ children }) {
  const { setOpen, setSearch } = useContext(PostContext);

  const handleTwoFunctions = () => {
    setOpen(false);
    setSearch("");
  };

  return (
    <button
      type="button"
      className=" px-4  tracking-wide duration-200 ease-in hover:text-pink-300"
      onClick={handleTwoFunctions}
    >
      {children}
    </button>
  );
}

export default ButtonNav;
