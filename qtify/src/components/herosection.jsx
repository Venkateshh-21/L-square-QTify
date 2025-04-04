import "./herosection.css"
import image from "../assets/vibrating-headphone 1.png"

import React from 'react'

function Herosection() {
  return (
    <div className="hero">
        <div className="content">
            <h1>1000 Songs,Add-free </h1>
            <h1>Over Thousand Podcast Episodes</h1>
        </div>
        <img src={image} alt="headphones" className="image" />
    </div>
  )
}

export default Herosection