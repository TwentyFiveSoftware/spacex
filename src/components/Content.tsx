import React, { FunctionComponent, useContext } from 'react';
import styles from '../styles/Content.module.scss';
import { LaunchesContext } from '../App';
import InfoContainer from './InfoContainer';

const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

const Content: FunctionComponent<{ launchIndex: number }> = ({ launchIndex }) => {
    const launches = useContext(LaunchesContext);
    if (launches.length <= launchIndex) return null;
    const launch = launches[launchIndex];

    return (
        <main className={styles.container}>
            <div className={styles.date}>{DATE_TIME_FORMAT.format(new Date(launch.date_unix * 1000))}</div>
            <span className={styles.flightNumber}>#{launch.flight_number}</span>
            <h1 className={styles.launchName}>{launch.name}</h1>
            <p className={styles.details}>{launch.details}</p>

            <div className={styles.info}>
                <div className={styles.column}>
                    <InfoContainer title={'ROCKET'} text={launch.rocket.description}>
                        x
                    </InfoContainer>
                    <InfoContainer title={'CORES / LANDING'}></InfoContainer>
                </div>
                <div className={styles.column}>
                    <InfoContainer title={'PAYLOAD'}></InfoContainer>
                    <InfoContainer title={'LAUNCHPAD'} text={launch.launchpad.details}></InfoContainer>
                </div>
            </div>
        </main>
    );
};

export default Content;
