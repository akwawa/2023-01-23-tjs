import React from 'react';

import styles from './Button.module.css';


// function Button() {
/**
 * simple button
 * @returns react component structure
 */
const Button=(props)=>{
    console.log(props);
    return <button className={styles.Button}>{props.children}</button>;
}

export default Button;
