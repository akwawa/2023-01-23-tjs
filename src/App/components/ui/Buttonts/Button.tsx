import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css';

interface IButtonProps {
    onButtonClick?:Function
    bgColor?:string
    style?:{}
    children:string|React.ReactElement|Array<string|React.ReactElement>
    type?:"submit"|"reset"|"button"
}

// function Button() {
/**
 * simple button
 * @returns react component structure
 */
const Button:React.FC<IButtonProps> = (props) => {
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
            type={props.type}

            className={
                `${styles.Button}${isClicked ? ' ' + styles.clicked : ''}`
            }

            style={{backgroundColor: props.bgColor,...props.style}}
            // style={props.style}

            onClick={
                (arg: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    setIsClicked(true);
                    // setIsClicked({...isClicked,clickedState:true});
                    if (typeof props.onButtonClick !== "undefined") {
                        props.onButtonClick();
                    }
                }
            }
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func,
    style: PropTypes.object,
    bgColor: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
    onButtonClick: () => { alert("pas d'action"); },
    type: 'button',
}

export default Button;
