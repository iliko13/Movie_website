import { useState } from "react";
import { useContext, useEffect } from "react";
import { PostContext } from "../AppLayout";
import aquamanImage from "../images/adventure/aquaman.jpeg";
import barbie from "../images/adventure/barbie.jpeg";
import creator from "../images/adventure/creator.jpeg";
import indiana from "../images/adventure/indiana_jones.jpeg";
import mermaid from "../images/adventure/little_mermaid.jpeg";
import bottoms from "../images/comedy/bottoms.jpeg";
import dumb from "../images/comedy/dumb_money.jpeg";
import feelings from "../images/comedy/no_hard_feelings.jpeg";
import redblue from "../images/comedy/red_white.jpeg";
import theater from "../images/comedy/theater_camp.jpeg";
import bikeriders from "../images/drama/bikeriders.jpeg";
import haunting from "../images/drama/haunting-venice.jpeg";
import killers from "../images/drama/killers_flower_moon.jpeg";
import milion from "../images/drama/milion_miles_away.jpeg";
import oppenheimer from "../images/drama/oppenheimer.jpeg";
import avatar from "../images/fantasy/avatar.jpeg";
import dungeos from "../images/fantasy/dungeos.jpeg";
import free from "../images/fantasy/free-guy.jpeg";
import pirates from "../images/fantasy/pirates.jpeg";
import triangle from "../images/fantasy/triangle.jpeg";
import barry from "../images/history/barry.jpeg";
import elconde from "../images/history/elconde.jpeg";
import ferrari from "../images/history/ferrari.jpeg";
import freedom from "../images/history/freedom.jpeg";
import lee from "../images/history/lee.jpeg";
import demeter from "../images/horror/demeter.jpeg";
import evil from "../images/horror/evil.jpeg";
import exorcist from "../images/horror/exorcist.jpeg";
import nun from "../images/horror/nun.jpeg";
import saw from "../images/horror/saw.jpeg";

const KEY = "6a2bfe75";

function Trending() {
  const { error, setError } = useContext(PostContext);
  const [isLoadingT, setIsLoadingT] = useState(false);

  const categories = [
    {
      title: "Adventure",
      images: [aquamanImage, barbie, creator, indiana, mermaid],
    },
    {
      title: "Comedy",
      images: [bottoms, dumb, feelings, redblue, theater],
    },
    {
      title: "Drama",
      images: [bikeriders, haunting, killers, milion, oppenheimer],
    },
    {
      title: "Fantasy",
      images: [avatar, dungeos, free, pirates, triangle],
    },
    {
      title: "History",
      images: [barry, elconde, ferrari, freedom, lee],
    },
    {
      title: "Horror",
      images: [demeter, evil, exorcist, nun, saw],
    },
  ];

  return (
    <div className=" w-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <h1 className="mb-8 flex items-center justify-center p-4 text-xl font-bold text-stone-200 md:text-3xl lg:text-7xl">
        Top Trending Movies
      </h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h1 className="flex items-center justify-center p-4 text-4xl font-bold text-stone-200">
            {category.title}
          </h1>
          <div className="grid grid-cols-2 border-2 border-indigo-300 md:grid-cols-3 lg:grid-cols-5">
            {category.images.map((image, imgIndex) => (
              <div key={imgIndex} className="w-4/4 p-2">
                <img src={image} alt={`${category.title} ${imgIndex}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trending;
