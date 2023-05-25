import { useState } from "react";

const Hero = ({info}) => {

  const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}).slice(0, 5);

  const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
  

  return (
    <>
      <div className="hero">
          <p className="hero-greeting">Good {currentTime < 12 ? 'morning' : currentTime < 18 ? 'afternoon' : 'evening'}!</p>
          <div className="hero-container">
            <div className="hero-sub">{currentTime}</div>
            <div className="hero-sub">
              <img className='hero-img' src={iconUrl} alt="weather icon" />
            </div>
            <div className="hero-sub">{(info.main.temp - 273.15).toFixed()}°C</div>
          </div>
          <p className="hero-location"><span className="location-text">You are currently in</span> {info.name}, {info.sys.country}</p>
          <button className='btn btn-hero'>Show More</button>
      </div>
    </>
  )
}

export default Hero