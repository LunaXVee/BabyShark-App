import React from 'react'
import './Navbar.css'
import shark_logo from "../../assets/shark_logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import squid_icon from "../../assets/squid_icon.png"



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={shark_logo} alt="" className="shark-logo" />
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Disney Shows</li>
          <li>Anime</li>
          <li>New and Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>Category</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className="navbar-profile">
        <img src={squid_icon} alt="" className='profile'/>
        <img src={caret_icon} alt=""/>

        <div className="dropdown">
          <p>Sign Out</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
