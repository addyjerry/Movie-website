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
    {
      id: 1,
      banner: strong,
      genre: "Genre :Action ,War ,History",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/MkNIhUBxo73-12-strong-2018-awafim-tv-mkv",
    },
    {
      id: 2,
      banner: ninety,
      genre: "Genre :Action ,Crime,Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/hpNduHmoB04-1992-2024-awafim-tv-mkv",
    },
    {
      id: 3,
      banner: afraid,
      genre: "Genre : Horror, Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/cfTLMxUvK25-afraid-2024-awafim-tv-mkv",
    },
    {
      id: 4,
      banner: monkey,
      genre: "Genre :Action ,Thriller ,Crime",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/zvOLKgsBZ63-monkey-man-2024-awafim-tv-mkv",
    },
    {
      id: 5,
      banner: blink,
      genre: "Genre : Mystery ,Thriller",
      date: "Release date :01 / 05 / 2023",
      urll: "https://www.lulacloud.com/d/hVeRVSqiI64-blink-twice-2024-awafim-tv-mkv",
    },
    {
      id: 6,
      banner: creeping,
      genre: "Genre :Action",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/bmAAgpjww76-sleeping-dogs-2024-awafim-tv-mkv",
    },
    {
      id: 7,
      banner: escape,
      genre: "Genre :Action",
      date: "Release date :01 / 05 / 2023",
    },
    {
      id: 8,
      banner: after,
      genre: "Genre :Action ,Drama ,Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/luzhxzNqa24-escape-2024-awafim-tv-mkv",
    },
    {
      id: 9,
      banner: daughter,
      genre: "Genre :Documentary",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/iEigmFGrc14-daughters-2024-awafim-tv-mkv",
    },
    {
      id: 10,
      banner: lost,
      genre: "Genre : Crime , Comedy",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/EESEsDkMl14-the-lost-lotteries-2022-awafim-tv-mkv",
    },
    {
      id: 11,
      banner: heroes,
      genre: "Genre :Action ,Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/EmcAYHbCD86-long-gone-heroes-2024-awafim-tv-mkv",
    },
    {
      id: 12,
      banner: kneeca,
      genre: "Genre :Action ,Crime",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/bMfmVtNIL51-shooting-heroin-2020-awafim-tv-mp4",
    },
  ]);

  const [description, setDescription] = useState();
  return (
    <div id="pagetwo">
      <div className="latest__list">
        {cards.map((cards) => (
          <div className="latest__list__card" key={cards.id}>
            <a href={cards.url}>
            <img
              src={cards.banner}
              alt="banner"
              onMouseEnter={() => setDescription(cards.id)} //showDescription
              onMouseLeave={() => setDescription(false)} //Hide Description
            />
            </a>
            {description == cards.id ? (
              <div className="description">
                <h2>{cards.genre}</h2>
                <p>{cards.date}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagetwo;
