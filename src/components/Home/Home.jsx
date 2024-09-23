import React,{useState}from 'react'
import './Home.css'
import uglies from "../../assets/uglies-movie-poster.jpg";
import twisters from "../../assets/twisters-movie-poster-md.jpg";
import crow from "../../assets/the-crow-movie-poster-md.jpg";
import subservience from "../../assets/subservience-movie-poster-md.jpg";
import lostcity from '../../assets/the-lost-city-movie-poster-md.jpg'
import strangers from '../../assets/strangers-movie-poster-md.jpg'
import slingshot from '../../assets/slingshot-movie-poster-md.jpg'
import sightmovie from '../../assets/sight-movie-poster-md.jpg'
import rob from '../../assets/rob-peace-movie-poster-md.jpg'
import lost from '../../assets/lost-soulz-movie-poster.jpg'
import long from '../../assets/long-gone-heroes-movie-poster.jpg'
import kneecap from '../../assets/kneecap-movie-poster-md.jpg'


const Home = () => {
    const [cards, setCards] = useState([
        { id: 1, banner: uglies },
        { id: 2, banner: twisters },
        { id: 3, banner: crow },
        { id: 4, banner: lostcity },
        { id: 5, banner: subservience },
        { id: 6, banner: strangers },
        { id: 7, banner: slingshot },
        { id: 8, banner: sightmovie },
        { id: 9, banner: rob },
        { id: 10, banner: lost },
        { id: 11, banner: long },
        { id: 12, banner: kneecap }
      ]);
  return (
    <div>
     <div className="latest">
        <h2>Latest movies</h2>
        <div className="latest__list">
          {cards.map((cards) => (
            <div className="latest__list__card" key={cards.id}>
              <img src={cards.banner} alt="banner" />
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Home
