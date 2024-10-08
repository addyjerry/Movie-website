import React, { useState } from "react";
import "./Home.css";
import thicket from "../../assets/pagethree/the-thicket-movie-poster.jpg";
import twisters from "../../assets/twisters-movie-poster-md.jpg";
import crow from "../../assets/the-crow-movie-poster-md.jpg";
import subservience from "../../assets/subservience-movie-poster-md.jpg";
import lostcity from "../../assets/the-lost-city-movie-poster-md.jpg";
import strangers from "../../assets/strangers-movie-poster-md.jpg";
import slingshot from "../../assets/slingshot-movie-poster-md.jpg";
import sightmovie from "../../assets/sight-movie-poster-md.jpg";
import rob from "../../assets/rob-peace-movie-poster-md.jpg";
import lost from "../../assets/lost-soulz-movie-poster.jpg";
import long from "../../assets/long-gone-heroes-movie-poster.jpg";
import kneecap from "../../assets/kneecap-movie-poster-md.jpg";

const Home = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      banner: thicket,
      genre: "Genre :Action",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/fgIzJKZky36-the-thicket-2024-awafim-tv-mkv",
    },
    {
      id: 2,
      banner: twisters,
      genre: "Genre :Horror",
      date: "Release date :04 / 06 / 2023",
      url: "https://www.lulacloud.com/d/EvnDrDPXv31-twisters-2024-awafim-tv-mkv",
    },
    {
      id: 3,
      banner: crow,
      genre: "Genre :Drama, Action",
      date: "Release date :01 / 12 / 2023",
      url: "https://www.lulacloud.com/d/BGGkhzroe72-the-crow-2024-awafim-tv-mkv",
    },
    {
      id: 4,
      banner: lostcity,
      genre: "Genre :Action",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/GbAhdANGe64-the-lost-city-2022-awafim-tv-mp4",
    },
    {
      id: 5,
      banner: subservience,
      genre: "Genre : Horror, Sci-Fi",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/lgeDpbOii25-subservience-2024-awafim-tv-mp4",
    },
    {
      id: 6,
      banner: strangers,
      genre: "Genre : Horror , Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/SCsxtxmmz74-the-strangers-chapter-1-2024-awafim-tv-mkv",
    },
    {
      id: 7,
      banner: slingshot,
      genre: "Genre :Sci-Fi, Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/AvZiGNwrp12-slingshot-2024-awafim-tv-mkv",
    },
    {
      id: 8,
      banner: sightmovie,
      genre: "Genre :Love,Drama",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/xWkZPLzHV85-love-at-first-sight-2023-awafim-tv-mkv",
    },
    {
      id: 9,
      banner: rob,
      genre: "Genre : Drama , History",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/YMnjfrygL63-rob-peace-2024-awafim-tv-mkv",
    },
    {
      id: 10,
      banner: lost,
      genre: "Genre :Action ,Crime ,Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/BafOpSpsT46-lost-bullet-2-2022-awafim-tv-mkv",
    },
    {
      id: 11,
      banner: long,
      genre: "Genre :Action ,Crime , Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/EmcAYHbCD86-long-gone-heroes-2024-awafim-tv-mkv",
    },
    {
      id: 12,
      banner: kneecap,
      genre: "Genre :Comedy , Drama",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/ZOsNznydb66-kneecap-2024-awafim-tv-mkv",
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

export default Home;
