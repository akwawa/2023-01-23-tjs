import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'

import styles from './Button.module.css';


// function Button() {
/**
 * simple button
 * @returns react component structure
 */
const Button = (props) => {
    // Valeur statique pour fonction
    const [isClicked, setIsClicked] = useState(false);
    // console.log(props);

    // hook d'effet de cycle de vie d'une valeur
    useEffect(() => {
        console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 2000);
        }
    }, [isClicked]);

    return (
        <button
            className={
                `${styles.Button} ${isClicked ? ' ' + styles.clicked : ''}`
            }
            onClick={(arg) => {
                setIsClicked(true);
                // setIsClicked({...isClicked,clickedState:true});
                // console.log(arg);
                props.onButtonClick();
            }
            }>{props.children}
        </button>
    );
}

export default Button;
