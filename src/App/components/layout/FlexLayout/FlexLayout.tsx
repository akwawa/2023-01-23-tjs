import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './FlexLayout.module.css';

export interface IFlexLayoutProps {
    style?: {}
}

export interface IFlexLayoutState { }

export const initialState: IFlexLayoutState = {}

const FlexLayout: React.FC<IFlexLayoutProps> = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <div
            className={styles.FlexLayout}
            data-testid="FlexLayout"
            style={props.style}
        >
            FlexLayout
        </div>);
}

FlexLayout.propTypes = {
    style: PropTypes.object,
}
FlexLayout.defaultProps = {

}

export default FlexLayout;
