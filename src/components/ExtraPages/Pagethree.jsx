import React,{useState} from 'react'
import "./Pagetwo.css";
import peter from "../../assets/pagethree/peter-five-eight-movie-poster-md.jpg";
import rebel from "../../assets/pagethree/rebel-ridge-poster.jpg";
import seal from "../../assets/pagethree/seal-team-movie-poster-md.jpg";
import transformers from "../../assets/subservience-movie-poster-md.jpg";
import tulsa from "../../assets/pagethree/tulsa-king-movie-poster-md.jpg";
import uglies from "../../assets/strangers-movie-poster-md.jpg";
import slingshot from "../../assets/slingshot-movie-poster-md.jpg";
import sightmovie from "../../assets/sight-movie-poster-md.jpg";
import rob from "../../assets/rob-peace-movie-poster-md.jpg";
import lost from "../../assets/lost-soulz-movie-poster.jpg";
import long from "../../assets/long-gone-heroes-movie-poster.jpg";
import kneecap from "../../assets/kneecap-movie-poster-md.jpg";
import front from "../../assets/pagethree/the-front-room-movie-poster-md.jpg";

const Pagethree = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      banner: peter,
      genre: "Genre :Action",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/TxkhDdQMr67-peter-five-eight-2024-awafim-tv-mkv",
    },
    {
      id: 2,
      banner: rebel,
      genre: "Genre :Action,Crime",
      date: "Release date :04 / 06 / 2023",
      url: "https://www.lulacloud.com/d/MshVpnFAh91-rebel-ridge-2024-awafim-tv-mkv",
    },
    {
      id: 3,
      banner: seal,
      genre: "Genre :Drama, Action,Adventure,War",
      date: "Release date :01 / 12 / 2023",
      url: "https://www.lulacloud.com/d/FhebyUoWS18-seal-team-s07e08-appetite-for-destruction-awafim-tv-mkv",
    },
    {
      id: 4,
      banner: front,
      genre: "Genre : Horror, Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/fJHFyyQsm70-the-front-room-2024-awafim-tv-mkv",
    },
    {
      id: 5,
      banner: transformers,
      genre: "Genre : Horror, Sci-Fi",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/BPXlLlUcD80-transformers-rise-of-the-beasts-2023-awafim-tv-mkv",
    },
    {
      id: 6,
      banner: tulsa,
      genre: "Genre : Horror , Thriller",
      date: "Release date :01 / 05 / 2023",
      url: "https://www.lulacloud.com/d/uPimJuVqW78-tulsa-king-s02e02-kansas-city-blues-awafim-tv-mkv",
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
        id: 9,
        banner: uglies,
        genre: "Genre : Adventure,Drama ,Sci-Fi",
        date: "Release date :01 / 05 / 2023",
        url: "https://www.lulacloud.com/d/SyJoPXJmx99-uglies-2024-awafim-tv-mkv",
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

export default Pagethree
