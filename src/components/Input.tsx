import { IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';
import classes from '../App.module.css';
import styles from '../Styles.module.css';

import { KeyboardEvent, useRef } from 'react';

type InputProps = {
    change: (inputValue:string) => void;
}

const Input = ({change}:InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    function handleEnterKeyPressed(event:KeyboardEvent<HTMLInputElement>){
        if(event.key === 'Enter'){
            change(inputRef.current?.value ?? '');
        }
    }

    return ( 
        <div className={styles.input__container}>
            <input onKeyUp={handleEnterKeyPressed} ref={inputRef} type="text" placeholder='Search Location...'/>
            <IonIcon 
            className={styles.input__container__icon}            
            icon={search}/>
        </div>
    );
}

 
export default Input;