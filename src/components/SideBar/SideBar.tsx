import React, { useContext, useState } from 'react';
import { LaunchesContext } from '../App/App';
import styles from './SideBar.module.scss';
import LaunchContainer from '../LaunchContainer/LaunchContainer';

interface Props {
    launchIndex: number;
    onSelectLaunch: Function;
    isUpcomingSelected: boolean;
    onSelectIsUpcoming: Function;
}

const SideBar: React.FC<Props> = ({ launchIndex, onSelectLaunch, isUpcomingSelected, onSelectIsUpcoming }: Props) => {
    const launches = useContext(LaunchesContext);
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

    return (
        <div className={sidebarVisible ? styles.sidebar : styles.sidebar__hidden}>
            <div className={styles.launchTypSelection}>
                <p
                    onClick={() => {
                        onSelectIsUpcoming(true);
                        setSidebarVisible(true);
                    }}
                    className={isUpcomingSelected ? styles.active : ''}
                >
                    UPCOMING LAUNCHES
                </p>
                <p
                    onClick={() => {
                        onSelectIsUpcoming(false);
                        setSidebarVisible(true);
                    }}
                    className={!isUpcomingSelected ? styles.active : ''}
                >
                    PAST LAUNCHES
                </p>
            </div>
            <div className={styles.launchSelection}>
                {launches.map((obj, index) => (
                    <LaunchContainer
                        key={obj.flight_number}
                        active={launchIndex === index}
                        flightNumber={obj.flight_number}
                        name={obj.name}
                        launchPadName={obj.launchpad?.name}
                        rocketName={obj.rocket?.name}
                        payload={obj.payloads[0]?.type}
                        date={obj.date_unix}
                        onClick={() => {
                            setSidebarVisible(false);
                            onSelectLaunch(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
