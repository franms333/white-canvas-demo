import { IonIcon } from '@ionic/react';
import { WeatherDetail } from '../App';
import classes from '../App.module.css';

type WeatherDetailsList = {
  details: WeatherDetail[]
}

const WeatherDetailsList = ({details}:WeatherDetailsList) => {

    return ( 
        <div className={classes.weather_details_list}>
          <h3>THUNDERSTORM WITH LIGHT DRIZZLE</h3>
            {details && details.map((weatherDetail)=>(
              <div key={weatherDetail.title} className={classes.weather_detail_line}>
                <p>{weatherDetail.title}</p>
                <p>{weatherDetail.value}</p>
                <IonIcon 
                className={classes.weather_detail_icon}
                style={{color:`${weatherDetail.color}`}}
                icon={weatherDetail.icon}/>
              </div>
            )) 
          }
        </div>
    );
}
 
export default WeatherDetailsList;