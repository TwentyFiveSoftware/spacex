import React, { createContext, useEffect, useState } from 'react';
import styles from './App.module.scss';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import { PAST_LAUNCHES_REQUEST_BODY } from 'queries/pastLaunches';
import { UPCOMING_LAUNCHES_REQUEST_BODY } from 'queries/upcomingLaunches';
import Content from 'components/Content/Content';
import SideBar from 'components/SideBar/SideBar';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

export const LaunchesContext = createContext<Launch[]>([]);

interface Props {}

const App: React.FC<Props> = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[]>([]);
    const [pastLaunches, setPastLaunches] = useState<Launch[]>([]);
    const [selectedLaunchIndex, setSelectedLaunchIndex] = useState<number>(0);
    const [isUpcomingSelected, setIsUpcomingSelected] = useState<boolean>(true);

    useEffect(() => {
        const fetchUpcomingLaunches = async () => {
            const { data } = await axios.post<{ docs: Launch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                UPCOMING_LAUNCHES_REQUEST_BODY,
                { headers: { 'Content-Type': 'application/json' } },
            );
            if (!data) return;
            setUpcomingLaunches(data.docs);
        };

        const fetchPastLaunches = async () => {
            const { data } = await axios.post<{ docs: Launch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                PAST_LAUNCHES_REQUEST_BODY,
                { headers: { 'Content-Type': 'application/json' } },
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
