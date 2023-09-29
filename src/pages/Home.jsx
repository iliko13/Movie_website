import cover1 from "../images/covers/cover-1.jpeg";
import cover2 from "../images/covers/cover-2.jpeg";
import cover3 from "../images/covers/cover-3.png";
import cover4 from "../images/covers/cover-4.jpeg";
import cover5 from "../images/covers/cover-5.avif";
import ImageSlider from "../ui/ImageSlider";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { useState } from "react";

function Home() {
  const slides = [
    { url: cover1 },
    { url: cover2 },
    { url: cover3 },
    { url: cover4 },
    { url: cover5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(3);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 ">
      <div className="flex h-64 items-center justify-center">
        <h1 className=" select-none px-16 text-center text-base font-bold text-stone-200 md:text-xl lg:text-3xl">
          Welcome to MoviesX, your ultimate destination for the latest
          blockbuster films, timeless classics, and everything in between.
          Discover, watch, and immerse yourself in the world of cinema like
          never before. Lights, camera, action—let's explore!
        </h1>
      </div>

      <div className="group relative m-auto h-[780px] w-full max-w-[1400px]  px-4 py-8 ">
        <ImageSlider slides={slides} currentIndex={currentIndex} />
        <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="top-4 flex justify-center py-2 text-stone-200">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer text-2xl"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-20 w-screen select-none items-center justify-center space-x-5 text-stone-100 md:h-28 md:space-x-40   lg:h-32 lg:space-x-80 xl:space-x-96">
        <h6>&copy; 2023 MovieX. All Rights Reserved.</h6>
        <div className=" flex  cursor-pointer items-center justify-center space-x-3 text-2xl ">
          <BsFacebook className="hover:text-blue-500" />
          <BsInstagram className="hover:text-pink-500" />
          <BsTwitter className="hover:text-cyan-400" />
          <BsYoutube className="hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}

export default Home;
