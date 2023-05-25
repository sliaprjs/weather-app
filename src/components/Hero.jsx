import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <p className="hero-greeting">Good Morning!</p>
        <div className="hero-container">
          <div className="hero-time">11:55</div>
          <div className="hero-temp">25 C</div>
        </div>
        <p className="hero-location">You are currently in London, UK</p>
      </div>
  )
}

export default Hero