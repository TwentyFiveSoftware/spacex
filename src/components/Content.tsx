import React, { useContext } from 'react';
import styles from '../styles/Content.module.scss';
import { LaunchesContext } from '../App';
import InfoContainer from './InfoContainer';
import DataTable from './DataTable';
import GroupWrapper from './GroupWrapper';

const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

const Content: React.FC<{ launchIndex: number }> = ({ launchIndex }) => {
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
                    <InfoContainer title={'CORES / LANDING'}>
                        {launch.cores.map((core, index) => (
                            <GroupWrapper key={index}>
                                <h3 className={styles.subtitle}>CORE #{index + 1}</h3>
                                <DataTable
                                    content={[
                                        { name: 'Flight', value: core.flight },
                                        {
                                            name: 'Landing attempt',
                                            value:
                                                core.landing_attempt === null
                                                    ? '---'
                                                    : core.landing_attempt
                                                    ? 'Yes'
                                                    : 'No',
                                        },
                                        { name: 'Landing type', value: core.landing_type },
                                    ]}
                                />

                                <h3 className={styles.subtitle}>LANDPAD</h3>
                                {core.landpad === null ? (
                                    '---'
                                ) : (
                                    <DataTable
                                        content={[
                                            { name: 'Name', value: core.landpad.name },
                                            { name: 'Full name', value: core.landpad.full_name },
                                            { name: 'Type', value: core.landpad.type },
                                            { name: 'Locality', value: core.landpad.locality },
                                            { name: 'Region', value: core.landpad.region },
                                        ]}
                                    />
                                )}
                            </GroupWrapper>
                        ))}
                    </InfoContainer>
                </div>
                <div className={styles.column}>
                    <InfoContainer title={'PAYLOAD'}>
                        {launch.payloads.map((payload, index) => (
                            <GroupWrapper key={index}>
                                <DataTable
                                    content={[
                                        { name: 'Name', value: payload.name },
                                        { name: 'Type', value: payload.type },
                                        { name: 'Customers', value: payload.customers.join(', ') },
                                        { name: 'Manufacturers', value: payload.manufacturers.join(', ') },
                                        {
                                            name: 'Mass',
                                            value: payload.mass_kg
                                                ? `${new Intl.NumberFormat('de').format(payload.mass_kg)} kg`
                                                : '---',
                                        },
                                        { name: 'Orbit', value: `${payload.orbit} (${payload.regime})` },
                                    ]}
                                />
                            </GroupWrapper>
                        ))}
                    </InfoContainer>
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
