import React, { useState } from "react";
import "./Pagetwo.css";
import stranger from "../../assets/pagethree/a-stranger-in-the-woods-movie-poster-md.jpg";
import between from "../../assets/pagethree/between-the-temples-movie-poster-md.jpg";
import cuckoo from "../../assets/pagethree/cuckoo-movie-poster-md.jpg";
import fromo from "../../assets/pagethree/from-movie-poster-md.jpg";
import gold from "../../assets/pagethree/gold-raiders-movie-poster.jpg";
import hounds from "../../assets/pagethree/hounds-of-war-movie-poster-md.jpg";
import kill from "../../assets/pagethree/kill-em-all-2-movie-cover-md.jpg";
import lamaison from "../../assets/pagethree/la-maison-movie-poster-md.jpg";
import laststraw from "../../assets/pagethree/last-straw-movie-poster-md.jpg";
import mile22 from "../../assets/pagethree/mile-22-movie-poster-md.jpg";
import mystery from "../../assets/pagethree/mystery-island-movie-poster-md.jpg";
import omniloop from "../../assets/pagethree/omni-loop-movie-poster-md.jpg";

const Pagefour = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      banner: stranger,
      genre: "Genre :Drama , Horror Mystery",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/XDCknhdfX61-a-stranger-in-the-woods-2024-awafim-tv-mkv",
    },
    {
      id: 2,
      banner: between,
      genre: "Genre :Comedy, Drama",
      date: "Release date :04 / 06 / 2023",
      url: "https://www.lulacloud.com/d/zZWuYDcmW28-between-the-temples-2024-awafim-tv-mkv",
    },
    {
      id: 3,
      banner: cuckoo,
      genre: "Genre :Drama, Action",
      date: "Release date :01 / 12 / 2023",
      url: "https://www.lulacloud.com/d/gCZnpZtbb48-cuckoo-2024-awafim-tv-mkv",
    },
    {
      id: 4,
      banner: fromo,
      genre: "Genre :Drama ,Horror, Sci-Fi",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/xuNgMjMBv52-from-s03e01-shatter-awafim-tv-mkv",
    },
    {
      id: 5,
      banner: gold,
      genre: "Genre : Action, Drama",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/ccjTVuahU51-gold-raiders-2024-awafim-tv-mkv",
    },
    {
      id: 6,
      banner: hounds,
      genre: "Genre : Action,Crime, Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/YrfOVlKiE23-hounds-of-war-2024-awafim-tv-mkv",
    },
    {
      id: 7,
      banner: kill,
      genre: "Genre :Action,Crime",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/XAKmMKIhq35-kill-em-all-2-2024-awafim-tv-mkv",
    },
    {
      id: 8,
      banner: lamaison,
      genre: "Genre :Love,Drama",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/XRurSdbCG77-la-maison-s01e02-nepo-baby-awafim-tv-mkv",
    },
    {
      id: 9,
      banner: laststraw,
      genre: "Genre : Drama , History",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/ICgwhTcPy75-last-straw-2024-awafim-tv-mkv",
    },
    {
      id: 10,
      banner: mile22,
      genre: "Genre :Action,Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/zrbARuHIX43-mile-22-2018-awafim-tv-mkv",
    },
    {
      id: 11,
      banner: mystery,
      genre: "Genre :Mystery,Horror",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/WNcVVTqmj28-mystery-island-2023-awafim-tv-mkv",
    },
    {
      id: 12,
      banner: omniloop,
      genre: "Genre :Comedy , Drama,Sci-Fi",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/roKBzKDPw25-omni-loop-2024-awafim-tv-mkv",
    },
  ]);

  const [description, setDescription] = useState();

  return (
    <div>
      <div className="latest">
        <h2>Latest movies</h2>
        <div className="latest__list">
          {cards.map((card) => (
            <div className="latest__list__card" key={card.id}>
              <a href={card.url}>
                <img
                  src={card.banner}
                  alt="banner"
                  onMouseEnter={() => setDescription(card.id)} //showDescription
                  onMouseLeave={() => setDescription(false)} //Hide Description
                />
              </a>
              {description == card.id ? (
                <div className="description">
                  <h2>{card.genre}</h2>
                  <p>{card.date}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagefour;
