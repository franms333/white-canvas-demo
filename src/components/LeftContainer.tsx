import Input from './Input';
import logo from '../assets/logo.png';
import { IonIcon } from '@ionic/react';
import classes from '../App.module.css';
import { MainWeatherDetails } from '../App'; 
import { cloudOutline } from 'ionicons/icons';

type LeftContainerProps = {
    mainDetails:MainWeatherDetails
    change: (inputValue:string) => void
}

const LeftContainer = ({mainDetails,change}:LeftContainerProps) => {

    return (
        <section className={classes.left_container}>
            <div className={classes.header}>
                <img className={classes.logo} src={logo} alt="Weather App Logo" />
                <Input
                change={change}
                />
            </div>
            
            {mainDetails && 
            <div className={classes.weather_main_info_container}>
                <h1>{mainDetails.temp}°</h1>
                <div className={classes.date_container}>
                <h2>{mainDetails.city}</h2>
                {/* <p>06:09 - Monday, 9 Sep '23</p> */}
                <p>{mainDetails.date}</p>
                </div>
                <IonIcon 
                icon={cloudOutline}
                className={classes.weather_main_icon}
                />
            </div>}
        </section>
    );
}
 
export default LeftContainer;