import { IonIcon } from '@ionic/react';
import { cloudOutline } from 'ionicons/icons';
import classes from '../App.module.css';
import logo from '../assets/logo.png';

const LeftContainer = () => {
    return ( 
        <section className={classes.left_container}>
            <img className={classes.logo} src={logo} alt="Weather App Logo" />
            
            <div className={classes.weather_main_info_container}>
                <h1>16°</h1>
                <div className={classes.date_container}>
                <h2>London</h2>
                <p>06:09 - Monday, 9 Sep '23</p>
                </div>
                <IonIcon 
                icon={cloudOutline}
                className={classes.weather_main_icon}
                />
            </div>
        </section>
    );
}
 
export default LeftContainer;