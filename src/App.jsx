import {useState, useEffect} from 'react';

import Hero from './components/Hero';
import INITIAL from './components/initial';

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(INITIAL);
  const [place, setPlace] = useState('');

  useEffect(() => {
    if (place) {
      getPlace(place);
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        getData(position.coords.latitude, position.coords.longitude);
      });
  }, [place])

  const getData = async (lat, long) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=26c391408cfb7f28236135730fbed2c7`);
    const data = await response.json()
    setWeatherInfo(data);
  }

  const getPlace = async (place) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=26c391408cfb7f28236135730fbed2c7`);
    const data = await response.json()
    setWeatherInfo(data);
  }

  const handleInput = (e) => {
    e.preventDefault();
    setPlace(e.target[0].value);
  }

  console.log(weatherInfo);

  return (
    <main className='container'>
      <Hero info={weatherInfo} place={place} onSearch={handleInput}/>
    </main>
  )
}

export default App
