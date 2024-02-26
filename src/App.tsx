import { useEffect, useState } from 'react';
import styles from './Styles.module.css';

import rain from './assets/rain.jfif';
import snowy from './assets/snow.jfif';
import night from './assets/night.jfif';
import cloudy from './assets/cloudy.jfif';
import thunderstorm from './assets/thunderstorm.jfif';

import Input from './components/Input';
import LeftContainer from './components/LeftContainer';
import WeatherDetailsList from './components/WeatherDetailsList';
import WeatherForecastList from './components/WeatherForecastList';
import { thermometerOutline, waterOutline, cloudyOutline, rainyOutline, sunnyOutline, cloudyNightOutline, thunderstormOutline, snow } from 'ionicons/icons';
import WeatherNextDaysForecast from './components/WeatherNextDaysForecast';

export type WeatherDetail = {
  title:string,
  value:string,
  icon:any,
  color:string
}

export type MainWeatherDetails = {
  temp:number;
  city:string;
  date:string
} | undefined

export type ForecastDetail = {
  icon:any;
  title:string;
}

function App() {
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetail[]>([]);
  const [forecastDetails, setForecastDetails] = useState<ForecastDetail[]>([]);
  const [mainWeatherDetails, setMainWeatherDetails] = useState<MainWeatherDetails>();
  
  async function getWeather(city:string){
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b828842090525c3c4b6118a0f6879d18&units=metric`);
      const data: any = await response.json();

      console.log(data);

      const currentDate: Date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: '2-digit',
      };
      const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(currentDate);

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
      ];

      const mainDetails: MainWeatherDetails = {
        temp:parseInt(data.main.temp),
        city:data.name,
        date:formattedDate
      }

      const mainForecast: ForecastDetail[] = [
        {
          icon:rainyOutline,
          title:'Shower Rain'
        },
        {
          icon:sunnyOutline,
          title:'Clear Sky'
        },
        {
          icon:cloudyOutline,
          title:'Broken Clouds'
        },
        {
          icon:cloudyOutline,
          title:'Scattered Clouds'
        },
        {
          icon:cloudyNightOutline,
          title:'Few Clouds'
        },
        {
          icon:rainyOutline,
          title:'Rainy'
        },
        {
          icon:thunderstormOutline,
          title:'Thunderstorm'
        },
        {
          icon:snow,
          title:'Snow'
        }
      ]

      setWeatherDetails(weatherFetchedDetails);
      setMainWeatherDetails(mainDetails);
      setForecastDetails(mainForecast);

    } catch (error) {
      throw new Error('problem fetching weather data');
    }   
  }

  async function handleInputChange(inputValue:string) {
    getWeather(inputValue)
  }

  useEffect(()=>{
    getWeather('London')
  },[])


  return (
      <main className={styles.app}>
        <img className={styles['app__bg-image']} src={snowy} alt="Snowy entrance to asian shrine" />

        <section className={styles.app__container}>
          <LeftContainer 
          mainDetails={mainWeatherDetails}
          change={handleInputChange}/>


          <section className={styles['right-side']}>
            <Input
            change={handleInputChange}
            />

            <p>Weather Details...</p>

            <WeatherDetailsList 
            details={weatherDetails}/>

            <WeatherForecastList 
            forecast={forecastDetails}/>

            <WeatherNextDaysForecast />
          </section>
        </section>
      </main>
  )
}

export default App
