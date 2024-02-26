import { IonIcon } from '@ionic/react';
import styles from '../Styles.module.css';
import logo from '../assets/logo.png';
import Input from './Input';

import { cloudOutline } from 'ionicons/icons';
import { MainWeatherDetails } from '../App';

type LeftContainerProps = {
    mainDetails:MainWeatherDetails
    change: (inputValue:string) => void
}

const LeftContainer = ({mainDetails,change}:LeftContainerProps) => {

    return (
        <section className={styles['left-side']}>
            <div className={styles['left-side__header']}>
                <img src={logo} alt="Weather App Logo" />
                <Input
                change={change}
                />
            </div>
            
            {mainDetails && 
            <div className={styles['left-side__info']}>
                <h1>{mainDetails.temp}°</h1>
                <div className={styles.date__info}>
                    <h2>{mainDetails.city}</h2>
                    {/* <p>06:09 - Monday, 9 Sep '23</p> */}
                    <p>{mainDetails.date}</p>
                </div>
                <IonIcon 
                icon={cloudOutline}
                className={styles.icon}
                />
            </div>}
        </section>
    );
}
 
export default LeftContainer;