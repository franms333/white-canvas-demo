import { IonIcon } from '@ionic/react';
import { snow } from 'ionicons/icons';
import classes from '../App.module.css';
const WeatherForecastList = () => {
    
    return ( 
        <div className={classes.weather_forecast_list}>
              <h3>Today's Weather Forecast...</h3>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
              <div className={classes.weather_forecast_list_item}>
                <IonIcon 
                className={classes.weather_forecast_list_icon}
                icon={snow}/>
                <div className={classes.date_details_container}>
                  <p>09:00</p>
                  <p>Snow</p>
                </div>
                <p>19°</p>
              </div>
        </div>
    );
}
 
export default WeatherForecastList;