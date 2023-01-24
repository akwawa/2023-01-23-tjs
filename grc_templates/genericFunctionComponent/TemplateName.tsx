import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import styles from './TemplateName.module.css';

export interface ITemplateNameProps {
    style?: {}
}

export interface ITemplateNameState { }

export const initialState: ITemplateNameState = {}

const TemplateName: React.FC<ITemplateNameProps> = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // console.log(isClicked);
        if (isClicked === true) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    return (
        <div
            className={styles.TemplateName}
            data-testid="TemplateName"
            style={props.style}
        >
            TemplateName
        </div>);
}

TemplateName.propTypes = {
    style: PropTypes.object,
}
TemplateName.defaultProps = {

}

export default TemplateName;
