import {useState, useEffect} from 'react';

import Hero from './components/Hero';
import INITIAL from './components/initial';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(INITIAL);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getData(position.coords.latitude, position.coords.longitude);
    });
  }, [])

  const getData = async (lat, long) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=26c391408cfb7f28236135730fbed2c7`);
    const data = await response.json()
    setWeatherInfo(data);
  }

  console.log(weatherInfo);

  return (
    <main className='container'>
      <Hero info={weatherInfo}/>
    </main>
  )
}

export default App
