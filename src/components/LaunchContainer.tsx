import React, { FunctionComponent } from 'react';
import styles from '../styles/LaunchContainer.module.scss';

type Params = {
    active: boolean;
    flightNumber: number;
    name: string;
    rocketName: string;
    launchPadName: string;
    payload: string;
    date: number;
};



const formatDate = (date: number) => {
    const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return DATE_TIME_FORMAT.format(new Date(date * 1000))
}

const LaunchContainer: FunctionComponent<Params> = ({active, flightNumber, name, rocketName, launchPadName, payload, date}) => {
    return <div className={styles.container}>
        <p className={styles.flightNumber}>#{flightNumber.toString()}</p>
        <p className={styles.name}>{name}</p>
        <div className={styles.flexRow}>
            <p className={styles.date}>{formatDate(date)}</p>
            <p className={styles.spacer}>•</p>
            <p className={styles.rocketName}>{rocketName}</p>
        </div>
        <div className={styles.flexRow}>
            <p className={styles.launchPadName}>{launchPadName}</p>
            <p className={styles.spacer}>•</p>
            <p className={styles.type}>{payload}</p>
        </div>
    </div>;
};

export default LaunchContainer;
