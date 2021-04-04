import React, { FunctionComponent, useContext } from 'react';
import styles from '../styles/Content.module.scss';
import { LaunchesContext } from '../App';
import InfoContainer from './InfoContainer';
import DataTable from './DataTable';

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
                        <DataTable
                            content={[
                                { name: 'Name', value: launch.rocket.name },
                                { name: 'Stages', value: launch.rocket.stages },
                                { name: 'Height', value: `${launch.rocket.height.meters} m` },
                                {
                                    name: 'Cost per launch',
                                    value: new Intl.NumberFormat('en', {
                                        style: 'currency',
                                        currency: 'USD',
                                        maximumFractionDigits: 0,
                                    }).format(launch.rocket.cost_per_launch),
                                },
                            ]}
                        />
                    </InfoContainer>
                    <InfoContainer title={'CORES / LANDING'}></InfoContainer>
                </div>
                <div className={styles.column}>
                    <InfoContainer title={'PAYLOAD'}></InfoContainer>
                    <InfoContainer title={'LAUNCHPAD'} text={launch.launchpad.details}>
                        <DataTable
                            content={[
                                { name: 'Name', value: launch.launchpad.name },
                                { name: 'Full name', value: launch.launchpad.full_name },
                                { name: 'Locality', value: launch.launchpad.locality },
                                { name: 'Region', value: launch.launchpad.region },
                            ]}
                        />
                    </InfoContainer>
                </div>
            </div>
        </main>
    );
};

export default Content;
