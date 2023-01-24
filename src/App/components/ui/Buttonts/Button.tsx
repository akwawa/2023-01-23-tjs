import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css';

interface IButtonProps {
    onButtonClick:Function
    bgColor?:string
    style?:{}
    children:string|React.ReactElement|Array<string|React.ReactElement>
}

// function Button() {
/**
 * simple button
 * @returns react component structure
 */
const Button = (props:IButtonProps) => {
    // Valeur statique pour fonction
    const [isClicked, setIsClicked] = useState(false);
    // console.log(props);

    // hook d'effet de cycle de vie d'une valeur
    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <button
            className={
                `${styles.Button}${isClicked ? ' ' + styles.clicked : ''}`
            }

            style={{backgroundColor: props.bgColor,...props.style}}
            // style={props.style}

            onClick={
                (arg) => {
                    setIsClicked(true);
                    // setIsClicked({...isClicked,clickedState:true});
                    // console.log(arg);
                    props.onButtonClick();
                }
            }
        >{props.children}
        </button>
    );
};

Button.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    style: PropTypes.object,
    bgColor: PropTypes.string,
};

Button.defaultProps = {
    onButtonClick: () => { alert("pas d'action") }
}

export default Button;
