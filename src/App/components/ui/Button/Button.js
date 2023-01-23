import React from 'react';

// function Button() {
/**
 * simple button
 * @returns react component structure
 */
const Button=(props)=>{
    console.log(props);
    return <button className='Button'>{props.children}</button>;
}

export default Button;
