import { IonIcon } from '@ionic/react';
import { cloudyNightOutline, cloudyOutline, rainyOutline, snow, sunnyOutline, thunderstormOutline } from 'ionicons/icons';
import classes from '../App.module.css';
import { ForecastDetail } from '../App';

type WeatherForecastList = {
  forecast:ForecastDetail[]
}

const WeatherForecastList = ({forecast}:WeatherForecastList) => {
    
    return ( 
      <div className={classes.weather_forecast_list}>
        <h3>Today's Weather Forecast...</h3>
        {forecast && forecast.map((detail)=>(
          <div key={detail.title} className={classes.weather_forecast_list_item}>
            <IonIcon 
            className={classes.weather_forecast_list_icon}
            icon={detail.icon}/>
            <div className={classes.date_details_container}>
              <p>09:00</p>
              <p>{detail.title}</p>
            </div>
            <p>19°</p>
          </div>
          ))
        }
      </div>
    );
}
 
export default WeatherForecastList;