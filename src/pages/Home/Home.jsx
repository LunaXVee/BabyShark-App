import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import phineas from '../../assets/phineas.jpg'
import pup_title from '../../assets/Pup-title.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'





const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={phineas} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Seven brave pups go on a journey discovering their ties to a secret space base, Clover embarks on a quest to save his friends as the city is raided by aliens</p>
          <div className="hero-btns">
            <button className='btn' ><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

          </div>

          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards/>
      <TitleCards/>
      <TitleCards/>
      <TitleCards/>

      </div>
    </div>
  )
}

export default Home
