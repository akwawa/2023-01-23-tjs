import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './Navbar.module.css';

export interface INavbarProps {
    style?: {}
}

export interface INavbarState { }

export const initialState: INavbarState = {}

const Navbar: React.FC<INavbarProps> = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <div
            className={styles.Navbar}
            data-testid="Navbar"
            style={props.style}
        >
            Navbar
        </div>);
}

Navbar.propTypes = {
    style: PropTypes.object,
}
Navbar.defaultProps = {

}

export default Navbar;
