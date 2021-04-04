import React, { FunctionComponent } from 'react';
import styles from '../styles/GroupWrapper.module.scss';

const GroupWrapper: FunctionComponent = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.circle} />
                <div className={styles.line} />
            </div>
            <div>{children}</div>
        </div>
    );
};

export default GroupWrapper;
