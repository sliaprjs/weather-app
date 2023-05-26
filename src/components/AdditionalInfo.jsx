import React from 'react'

const AdditionalInfo = ({info, showing, iconUrl}) => {
  return (
    <div className={`add-info ${showing ? 'active' : null}`}>
      <div className="add-container add-text">
        <p className='add-sub'>
        <span className="material-symbols-outlined">
          humidity_low
          </span> {info.main.humidity} %
        </p>
        <p className='add-sub'>
        <span className="material-symbols-outlined">
          compare_arrows
          </span> {info.main.pressure} hPa
        </p>
        <p className='add-sub'>
        <span className="material-symbols-outlined">
          air
          </span> {info.wind.speed} m/s
        </p>
      </div>
      <div className="add-container">
        <p className="add-sub">
            <img className='add-img' src={iconUrl} alt="weather icon" />
            <span>{info.weather[0].main}</span>
        </p>
      </div>
    </div>
  )
}

export default AdditionalInfo