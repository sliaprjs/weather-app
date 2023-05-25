import {useState, useEffect} from 'react';
import axios from 'axios';

import Hero from './components/Hero'



const initialCoords = [];

navigator.geolocation.getCurrentPosition((position) => {
  initialCoords[0] = [position.coords.latitude.toFixed(2)];
  initialCoords[1] = [position.coords.longitude.toFixed(2)];
});

const App = () => {
  const [coords, setCoords] = useState(initialCoords);
  const [weatherInfo, setWeatherInfo] = useState();

  const locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=26c391408cfb7f28236135730fbed2c7`;

  useEffect(() => {
    axios.get(locationUrl).then(response => setWeatherInfo(response.data))
  }, [])

  console.log(coords, weatherInfo);

  return (
    <main className='container'>
      <Hero info={weatherInfo}/>
    </main>
  )
}

export default App
