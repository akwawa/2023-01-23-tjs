import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './SvgViewer.module.css';

export interface ISvgViewerProps {
    style?: {}
}

export interface ISvgViewerState { }

export const initialState: ISvgViewerState = {}

const SvgViewer: React.FC<ISvgViewerProps> = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <div
            className={styles.SvgViewer}
            data-testid="SvgViewer"
            style={props.style}
        >
            SvgViewer
        </div>);
}

SvgViewer.propTypes = {
    style: PropTypes.object,
}
SvgViewer.defaultProps = {

}

export default SvgViewer;
