import { IonIcon } from '@ionic/react';
import { ForecastDetail } from '../App';
import styles from '../Styles.module.css';

type WeatherForecastList = {
  forecast:ForecastDetail[]
}

const WeatherForecastList = ({forecast}:WeatherForecastList) => {
    
    return ( 
      <div className={styles['weather-forecast-list']}>
        <h3>Today's Weather Forecast...</h3>
        {forecast && forecast.map((detail)=>(
          <div key={detail.title} className={styles['weather-forecast-list__item']}>
            <IonIcon 
            className={styles.icon}
            icon={detail.icon}/>
            <div className={styles['weather-forecast-list__item__date']}>
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