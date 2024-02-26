import { IonIcon } from '@ionic/react';
import { WeatherDetail } from '../App';
import styles from '../Styles.module.css';

type WeatherDetailsList = {
  details: WeatherDetail[]
}

const WeatherDetailsList = ({details}:WeatherDetailsList) => {

    return ( 
        <div className={styles['weather-list']}>
          <h3>THUNDERSTORM WITH LIGHT DRIZZLE</h3>
            {details && details.map((weatherDetail)=>(
              <div key={weatherDetail.title} className={styles['weather-list__item']}>
                <p>{weatherDetail.title}</p>
                <p>{weatherDetail.value}</p>
                <IonIcon 
                className={styles.icon}
                style={{color:`${weatherDetail.color}`}}
                icon={weatherDetail.icon}/>
              </div>
            )) 
          }
        </div>
    );
}
 
export default WeatherDetailsList;