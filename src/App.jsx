import {useState, useEffect} from 'react';

import Hero from './components/Hero';
import INITIAL from './components/initial';

import Sky from './assets/sky.jpg';
import Clouds from './assets/clouds.jpg';
import Rain from './assets/rain.jpg';
import Snow from './assets/snow.jpg';
import Mist from './assets/mist.jpg';
import Error from './assets/error.jpg';

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
    if (data.cod === 200) {
      setWeatherInfo(data);
    } else {
      setWeatherInfo(INITIAL);
    }
  }

  const getPlace = async (place) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=26c391408cfb7f28236135730fbed2c7`);
    const data = await response.json()
    if (data.cod === 200) {
      setWeatherInfo(data);
    } else {
      setWeatherInfo(INITIAL);
    }
  }

  const handleInput = (e) => {
    e.preventDefault();
    setPlace(e.target[0].value);
  }

  let imageUrl;
  if (weatherInfo.sys.country === '404') {
    imageUrl = Error;
  } else if (weatherInfo.weather[0].description.includes('sky')) {
    imageUrl = Sky;
  } else if (weatherInfo.weather[0].description.includes('clouds')) {
    imageUrl = Clouds;
  } else if (weatherInfo.weather[0].description.includes('rain')) {
    imageUrl = Rain;
  } else if (weatherInfo.weather[0].description.includes('mist')) {
    imageUrl = Mist;
  } else {
    imageUrl = Snow;
  }
  

  const bgImage = {
    background: `url(".${imageUrl}") no-repeat center center/cover`,
  }

  console.log(weatherInfo);

  return (
    <div style={bgImage}>
      <main className='container'>
        <Hero info={weatherInfo} place={place} onSearch={handleInput}/>
      </main>
    </div>
  )
}

export default App
