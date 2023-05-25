import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";

const Hero = ({info}) => {
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const handleMoreInfo = () => {
    setAdditionalInfo(!additionalInfo);
  }

  return (
    <>
      <div className="hero">
      <p className="hero-greeting">Good Morning!</p>
      <div className="hero-container">
        <div className="hero-time">{new Date().toLocaleTimeString().slice(0, 5)}</div>
        <div className="hero-temp">{(info.main.temp - 273.15).toFixed()}°C</div>
      </div>
      <p className="hero-location">You are currently in {info.name}, {info.sys.country}</p>
      <button className='btn btn-hero' onClick={handleMoreInfo}>Show More</button>
      </div>
      {additionalInfo ? <AdditionalInfo info={info}/> : null}
    </>
  )
}

export default Hero