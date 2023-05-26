import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import Button from "./Button";
import Search from "./Search";

const Hero = ({info, place, onSearch}) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowing = () => {
    setIsShowing(!isShowing);
  }

  const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}).slice(0, 5);
  const hours = new Date().getHours();

  const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;

  return (
    <>
      <div className="hero">
        <div className="service-container">
          <p className="hero-greeting">Good {hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening'}!</p>
          <p className="hero-location"><span className="location-text">You are in</span> {info.name}, {info.sys.country}</p>
        </div>
        <div className="hero-container">
          <div className="hero-sub">{currentTime}</div>
          <div className="hero-sub">
            <img className='hero-img' src={iconUrl} alt="weather icon" />
          </div>
          <div className="hero-sub">{(info.main.temp - 273.15).toFixed()}°C</div>
        </div>
        <div className="service-container">
          <Search place={place} onSearch={onSearch}/>
          <Button isShowing={isShowing} onShow={handleShowing}/>
        </div>
      </div>
      
      <AdditionalInfo info={info} showing={isShowing}/>
      
    </>
  )
}

export default Hero