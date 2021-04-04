import React, { createContext, useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import axios from 'axios';
import type { ILaunch } from './types/SpaceX';
import upcomingLaunchesRequestBody from './queries/upcoming_launches.json';
import pastLaunchesRequestBody from './queries/past_launches.json';
import Content from './components/Content';
import SideBar from './components/SideBar';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

export const LaunchesContext = createContext<ILaunch[]>([]);

const App = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState<ILaunch[]>([]);
    const [pastLaunches, setPastLaunches] = useState<ILaunch[]>([]);
    const [selectedLaunchIndex, setSelectedLaunchIndex] = useState<number>(0);
    const [isUpcomingSelected, setIsUpcomingSelected] = useState<boolean>(true);

    useEffect(() => {
        const fetchUpcomingLaunches = async () => {
            const { data } = await axios.post<{ docs: ILaunch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                upcomingLaunchesRequestBody,
            );
            if (!data) return;
            setUpcomingLaunches(data.docs);
        };

        const fetchPastLaunches = async () => {
            const { data } = await axios.post<{ docs: ILaunch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                pastLaunchesRequestBody,
            );
            if (!data) return;
            setPastLaunches(data.docs);
        };

        fetchUpcomingLaunches();
        fetchPastLaunches();
    }, []);

    return (
        <LaunchesContext.Provider value={isUpcomingSelected ? upcomingLaunches : pastLaunches}>
            <div className={styles.container}>
                <SideBar
                    launchIndex={selectedLaunchIndex}
                    onSelectLaunch={(index: number) => setSelectedLaunchIndex(index)}
                    isUpcomingSelected={isUpcomingSelected}
                    onSelectIsUpcoming={(upcoming: boolean) => {
                        setIsUpcomingSelected(upcoming);
                        setSelectedLaunchIndex(0);
                    }}
                />
                <Content launchIndex={selectedLaunchIndex} />
            </div>
        </LaunchesContext.Provider>
    );
};

export default App;
