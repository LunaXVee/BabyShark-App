import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import phineas from '../../assets/phineas.jpg'
import pup_title from '../../assets/Pup-title.png'
import info_icon from '../../assets/info_icon.png'
import plus from '../../assets/plus.png'
import stars from '../../assets/stars2.png'

import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'





const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={phineas} alt="" className='banner-img' />
        <div className="hero-caption">



          <h2>Phineas and Ferb </h2>
          <h2>Into the Unknown </h2>
          <p className='description'>As the four boys embark on a journey discovering their ties to a secret space base</p>

          <p>ANIMATION | FANTASY | ACTION <img src={stars} className='stars' alt="" /></p>

          <div className="hero-btns">
            <button className='btn' ><img src={play_icon} alt="" />Play Now</button>
            <button className='btn dark-btn'><img src={plus} alt="" /></button>

          </div>

        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Disney Animated Movies _____________________________" category="animation" />
        <TitleCards title="Anime Movies _________________________________________" category="anime" />
        <TitleCards title="Family Animation _____________________________________" category="family_animation" />
        <TitleCards title="New Releases" category="now_playing" />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
