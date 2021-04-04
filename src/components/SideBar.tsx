import React from 'react';
import styles from '../styles/SideBar.module.scss';
import LaunchContainer from './LaunchContainer';

const SideBar = () => {
    return <div className={styles.container}>
        <div className={styles.launchTypSelection}></div>
        <div className={styles.launchSelection}>
            <LaunchContainer/>
        </div>
    </div>;
};

export default SideBar;
