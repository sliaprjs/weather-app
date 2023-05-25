import React from 'react'

const AdditionalInfo = ({info}) => {
  return (
    <div className='add-info'>
      <p className="humidity">Humidity: <span className='add-num'>{info.main.humidity}</span> %</p>
      <p className="pressure">Pressure: <span className='add-num'>{info.main.pressure}</span> hPa</p>
      <p className="wind">Wind: <span className='add-num'>{info.wind.speed}</span> m/s</p>
    </div>
  )
}

export default AdditionalInfo