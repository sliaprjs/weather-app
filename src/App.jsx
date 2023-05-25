import {useState, useEffect} from 'react';
import axios from 'axios';

import Hero from './components/Hero'

const INITIAL = {
  "coord": {
      "lon": 10.99,
      "lat": 44.34
  },
  "weather": [
      {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 291.9,
      "feels_like": 291.79,
      "temp_min": 290.19,
      "temp_max": 294.81,
      "pressure": 1018,
      "humidity": 75,
      "sea_level": 1018,
      "grnd_level": 934
  },
  "visibility": 10000,
  "wind": {
      "speed": 2.62,
      "deg": 61,
      "gust": 3.54
  },
  "clouds": {
      "all": 36
  },
  "dt": 1685018302,
  "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1684986007,
      "sunset": 1685040364
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
}

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(INITIAL);

  return (
    <main className='container'>
      <Hero info={weatherInfo}/>
    </main>
  )
}

export default App
