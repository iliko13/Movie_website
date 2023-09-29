import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Support() {
  return (
    <div className="flex min-h-screen select-none flex-col items-center justify-center overflow-hidden">
      <div className="flex h-[60vh]  w-screen flex-col items-center  justify-center space-y-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-stone-200 ">
        <h1 className=" tracking-wide lg:text-2xl">
          Have a question about MovieX.ge?
        </h1>
        <input
          type="text"
          className="w-32 rounded-md bg-purple-200 p-2 text-sm text-stone-950 duration-300 ease-in placeholder:text-stone-500 focus:w-44 focus:border-2 focus:border-pink-300 focus:outline-none sm:w-36 sm:focus:w-52 md:w-52 md:focus:w-72"
        />
      </div>
      <div className=" flex w-screen flex-col items-center justify-center bg-stone-200 p-8 font-semibold tracking-wide">
        <h3 className="underline underline-offset-4">
          Take a look at our FAQs
        </h3>
        <ul className="my-8 space-y-3">
          <li className="cursor-pointer duration-200 ease-in hover:text-indigo-500">
            Which movies are available on MovieX.ge ?
          </li>
          <li className="cursor-pointer duration-200 ease-in hover:text-indigo-500">
            What is Favorites?
          </li>
          <li className="cursor-pointer duration-200 ease-in hover:text-indigo-500">
            Can I import movies to My movies library from Digital Retailer
            family sharing/libraries?
          </li>
          <li className="cursor-pointer duration-200 ease-in hover:text-indigo-500">
            How to I activate MovieX on my streaming device or Smart TV?
          </li>
        </ul>
      </div>
      <div className=" flex h-20 w-screen select-none items-center justify-center space-x-5 bg-gradient-to-r from-indigo-800 via-purple-800   to-pink-900 text-stone-100 text-stone-100 md:h-28 md:h-28 md:space-x-40 lg:h-32  lg:space-x-80	xl:space-x-96 ">
        <h6>&copy; 2023 MovieX. All Rights Reserved.</h6>
        <div className="  flex cursor-pointer items-center justify-center space-x-3 text-2xl">
          <BsFacebook className="hover:text-blue-500" />
          <BsInstagram className="hover:text-pink-500" />
          <BsTwitter className="hover:text-cyan-400" />
          <BsYoutube className="hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Support;
