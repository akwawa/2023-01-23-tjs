import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './MainForm.module.css';

export interface IMainFormProps {
    style?: {}
}

export interface IMainFormState { }

export const initialState: IMainFormState = {}

const MainForm: React.FC<IMainFormProps> = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <div
            className={styles.MainForm}
            data-testid="MainForm"
            style={props.style}
        >
            MainForm
        </div>);
}

MainForm.propTypes = {
    style: PropTypes.object,
}
MainForm.defaultProps = {

}

export default MainForm;
