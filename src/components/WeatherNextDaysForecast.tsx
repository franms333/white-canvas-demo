import classes from '../App.module.css';
import { IonIcon } from '@ionic/react';
import { cloudyOutline } from 'ionicons/icons';

const WeatherNextDaysForecast = () => {
    return ( 
        <>
            <div className={classes.next_days_forecast_container}>
                <IonIcon 
                icon={cloudyOutline}
                className={classes.next_day_icon}
                />

                <div className={classes.next_day_detail}>
                    <h4>Friday, April 21</h4>
                    <p>Heavy Rain</p>
                </div>

                <div className={classes.next_day_temp_details}>
                    <p>9°</p>
                    <p>16°</p>
                </div>
            </div>
            <div className={classes.next_days_forecast_container}>
                <IonIcon 
                icon={cloudyOutline}
                className={classes.next_day_icon}
                />

                <div className={classes.next_day_detail}>
                    <h4>Saturday, April 22</h4>
                    <p>Heavy Rain</p>
                </div>

                <div className={classes.next_day_temp_details}>
                    <p>9°</p>
                    <p>16°</p>
                </div>
            </div>
            <div className={classes.next_days_forecast_container}>
                <IonIcon 
                icon={cloudyOutline}
                className={classes.next_day_icon}
                />

                <div className={classes.next_day_detail}>
                    <h4>Sunday, April 23</h4>
                    <p>Heavy Rain</p>
                </div>

                <div className={classes.next_day_temp_details}>
                    <p>9°</p>
                    <p>16°</p>
                </div>
            </div>
            <div className={classes.next_days_forecast_container}>
                <IonIcon 
                icon={cloudyOutline}
                className={classes.next_day_icon}
                />

                <div className={classes.next_day_detail}>
                    <h4>Monday, April 24</h4>
                    <p>Heavy Rain</p>
                </div>

                <div className={classes.next_day_temp_details}>
                    <p>9°</p>
                    <p>16°</p>
                </div>
            </div>
            <div className={classes.next_days_forecast_container}>
                <IonIcon 
                icon={cloudyOutline}
                className={classes.next_day_icon}
                />

                <div className={classes.next_day_detail}>
                    <h4>Tuesday, April 25</h4>
                    <p>Heavy Rain</p>
                </div>

                <div className={classes.next_day_temp_details}>
                    <p>9°</p>
                    <p>16°</p>
                </div>
            </div>
        </>
    );
}
 
export default WeatherNextDaysForecast;