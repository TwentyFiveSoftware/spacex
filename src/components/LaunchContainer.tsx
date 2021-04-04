import React from 'react';
import styles from '../styles/LaunchContainer.module.scss';

const LaunchContainer = () => {
    return <div className={styles.container}>
        <p className={styles.flightNumber}>#121</p>
        <p className={styles.name}>Starlink-22</p>
        <div className={styles.flexRow}>
            <p className={styles.date}>24.03.2021</p>
            <p className={styles.spacer}>•</p>
            <p className={styles.rocketName}>Falcon 9</p>
        </div>
        <div className={styles.flexRow}>
            <p className={styles.launchPadName}>CCSFS SLC 40</p>
            <p className={styles.spacer}>•</p>
            <p className={styles.type}>Satellite</p>
        </div>
    </div>;
};

export default LaunchContainer;
