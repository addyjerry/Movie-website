import React, { useState } from "react";
import "./Pagetwo.css";
import daughter from "../../assets/his-three-daughters-movie-poster-md.jpg";
import after from "../../assets/here-after-movie-poster-md.jpg";
import escape from "../../assets/escape-movie-cover-md.jpg";
import creeping from "../../assets/creeping-death-movie-poster-md.jpg";
import blink from "../../assets/blink-twice-movie-poster-md.jpg";
import monkey from "../../assets/bad-monkey-movie-poster-md.jpg";
import afraid from "../../assets/afraid-dutch-movie-poster-md.jpg";
import ninety from "../../assets/1992-movie-poster-md.jpg";
import strong from "../../assets/12-strong-movie-poster-md.jpg";
import lost from "../../assets/twisters-movie-poster-md.jpg";
import kneeca from "../../assets/kneecap-movie-poster-md.jpg";
import heroes from "../../assets/long-gone-heroes-movie-poster.jpg";
const Pagetwo = () => {
  const [cards, setCards] = useState([
    { id: 1, banner: strong },
    { id: 2, banner: ninety },
    { id: 3, banner: afraid },
    { id: 4, banner: monkey },
    { id: 5, banner: blink },
    { id: 6, banner: creeping },
    { id: 7, banner: escape },
    { id: 8, banner: after },
    { id: 9, banner: daughter },
    { id: 10, banner: lost },
    { id: 11, banner: heroes },
    { id: 12, banner: kneeca },
  ]);
  return (
    <div id="pagetwo">
      <div className="latest__list">
        {cards.map((cards) => (
          <div className="latest__list__card" key={cards.id}>
            <img src={cards.banner} alt="banner" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagetwo;
