import React, { useContext, useState } from 'react';
import styles from './SideBar.module.scss';
import { LaunchesContext } from 'components/App/App';
import LaunchContainer from 'components/LaunchContainer/LaunchContainer';

interface Props {
    launchIndex: number;
    onSelectLaunch: (index: number) => void;
    isUpcomingSelected: boolean;
    onSelectIsUpcoming: (upcoming: boolean) => void;
}

const SideBar: React.FC<Props> = ({ launchIndex, onSelectLaunch, isUpcomingSelected, onSelectIsUpcoming }: Props) => {
    const launches = useContext(LaunchesContext);
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

    return (
        <div className={`${styles.sidebar} ${sidebarVisible ? styles.sidebar__hidden : ''}`}>
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
                {launches.map((launch, i) => (
                    <LaunchContainer
                        key={launch.flight_number}
                        active={launchIndex === i}
                        flightNumber={launch.flight_number}
                        name={launch.name}
                        launchPadName={launch.launchpad?.name}
                        rocketName={launch.rocket?.name}
                        payload={launch.payloads[0]?.type}
                        date={launch.date_unix}
                        onClick={() => {
                            setSidebarVisible(false);
                            onSelectLaunch(i);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
