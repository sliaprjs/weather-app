import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import Button from "./Button";
import Search from "./Search";

const Hero = ({info, place, onSearch}) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowing = () => {
    setIsShowing(!isShowing);
  }

  const hours = new Date().getUTCHours() + (info.timezone /3600);
  const utcMinutes = new Date().getUTCMinutes();

  const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;

  const noError = info.sys.country !== '404';

  return (
    <>
      <div className="hero">
        <div className="service-container">
          {noError ? <p className="hero-greeting">Good {hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening'}!</p> : null}
          <p className="hero-location">{info.name}, {info.sys.country}</p>
        </div>
        {noError ? <div className="hero-container">
          <div className="hero-sub">{`${hours}:${utcMinutes}`}</div>
          <div className="hero-sub">{(info.main.temp - 273.15).toFixed()}°C</div>
        </div> : null}
        <div className="service-container">
          <Search place={place} onSearch={onSearch}/>
          {noError ? <Button isShowing={isShowing} onShow={handleShowing}/> : null}
        </div>
      </div>
      
      {noError ? <AdditionalInfo info={info} showing={isShowing} iconUrl={iconUrl}/> : null}
      
    </>
  )
}

export default Hero