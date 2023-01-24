import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './FlexLayout.module.css';

export interface IFlexLayoutProps {
    style?: {},
    children:Array<string|React.ReactElement>
}

const FlexLayout: React.FC<IFlexLayoutProps> = (props) => {

    return (
        <div
            className={styles.FlexLayout}
            data-testid="FlexLayout"
            style={props.style}
        >
            {props.children}
        </div>);
}

FlexLayout.propTypes = {
    style: PropTypes.object,
    children: PropTypes.array.isRequired,
}
FlexLayout.defaultProps = {

}

export default FlexLayout;
