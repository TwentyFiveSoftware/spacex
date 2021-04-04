import React, { useContext, useState } from 'react';
import { LaunchesContext } from '../App';
import styles from '../styles/SideBar.module.scss';
import LaunchContainer from './LaunchContainer';

const SideBar = () => {
    const [activeType, setActiveType] = useState('upcoming');
    const launches = useContext(LaunchesContext);
    return (
        <div className={styles.container}>
            <div className={styles.launchTypSelection}>
                <p onClick={() => setActiveType('upcoming')} className={activeType === 'upcoming' ? styles.active : ''}>
                    UPCOMING LAUNCHES
                </p>
                <p onClick={() => setActiveType('past')} className={activeType === 'past' ? styles.active : ''}>
                    PAST LAUNCHES
                </p>
            </div>
            <div className={styles.launchSelection}>
                {launches.map(obj => (
                    <LaunchContainer
                        key={obj.flight_number}
                        active={obj.flight_number === 122}
                        flightNumber={obj.flight_number}
                        name={obj.name}
                        launchPadName={obj.launchpad?.name}
                        rocketName={obj.rocket?.name}
                        payload={obj.payloads[0]?.type}
                        date={obj.date_unix}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
