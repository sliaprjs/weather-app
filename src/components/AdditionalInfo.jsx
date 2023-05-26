import React from 'react'

const AdditionalInfo = ({info, showing}) => {
  return (
    <div className={`add-info ${showing ? 'active' : null}`}>
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
  )
}

export default AdditionalInfo