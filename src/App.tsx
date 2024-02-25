import { useEffect, useState } from 'react';
import classes from './App.module.css';
import snowy from './assets/snow.jfif';

import Input from './components/Input';
import LeftContainer from './components/LeftContainer';
import WeatherDetailsList from './components/WeatherDetailsList';
import WeatherForecastList from './components/WeatherForecastList';
import { thermometerOutline, waterOutline, cloudyOutline } from 'ionicons/icons';

export type WeatherDetail = {
  title:string,
  value:string,
  icon:any,
  color:string
}

function App() {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetail[]>([]);
  
  async function getWeather(city:string){
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b828842090525c3c4b6118a0f6879d18&units=metric`);
      const data: any = await response.json();

      const weatherFetchedDetails: WeatherDetail[] = [
        {
          title: 'Temp max',
          value: `${data.main.temp_max}°`,
          icon: thermometerOutline,
          color: '#DFA1A1'
        },
        {
          title: 'Temp min',
          value: `${data.main.temp_min}°`,
          icon: thermometerOutline,
          color: '#6D97CA'
        },
        {
          title: 'Humidity',
          value: `${parseInt(data.main.humidity)}%`,
          icon: waterOutline,
          color: 'white'
        },
        {
          title: 'Cloudy',
          value: `${data.clouds.all}%`,
          icon: cloudyOutline,
          color: 'white'
        },
        {
          title: 'Wind',
          value: `${parseInt(data.wind.speed)}km/h`,
          icon: cloudyOutline,
          color: 'white'
        }
      ]

      setWeatherDetails(weatherFetchedDetails);

    } catch (error) {
      throw new Error('problem fetching weather data');
    }   
  }

  async function handleInputChange(inputValue:string) {
    getWeather(inputValue)
  }

  useEffect(()=>{
    getWeather('Buenos Aires')
  },[])


  return (
      <main className={classes.app_container}>
        <img className={classes.bg_image} src={snowy} alt="Snowy entrance to asian shrine" />

        <section className={classes.container}>
          <LeftContainer />

          <section className={classes.right_container}>
            <Input
            change={handleInputChange}
            />

            <p className={classes.weather_details_text}>Weather Details...</p>

            <WeatherDetailsList 
            details={weatherDetails}/>

            <WeatherForecastList />
          </section>
        </section>
      </main>
  )
}

export default App
