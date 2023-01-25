import React from 'react';

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div
            className={styles.Header}
            data-testid="Header"
        >
            <h1>
                {process.env.REACT_APP_NOT_SECRET_CODE}
            </h1>
        </div>
    );
}

export default Header;
