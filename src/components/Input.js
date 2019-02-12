import React from 'react';
import classes from '../css/Global.module.css'

const Input = ({label, type, name, onChange}) => {
    return ( 
        <>
            <label className={classes.Label}>{label}</label>
            <input className={classes.Input} type={type} name={name} onChange={onChange}/>
        </>
     );
}
 
export default Input;

