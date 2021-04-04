import React, { createContext, useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import axios from 'axios';
import type { ILaunch } from './types/SpaceX';
import upcomingLaunchesRequestBody from './queries/upcoming_launches.json';
import Content from './components/Content';
import SideBar from './components/SideBar';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

export const UpcomingLaunchesContext = createContext<ILaunch[]>([]);

const App = () => {
    const [upcomingLaunches, setUpcomingLaunches] = useState<ILaunch[]>([]);

    useEffect(() => {
        const fetchApiData = async () => {
            const { data } = await axios.post<{ docs: ILaunch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                upcomingLaunchesRequestBody,
            );
            if (!data) return;
            setUpcomingLaunches(data.docs);
        };

        fetchApiData();
    }, []);

    return (
        <UpcomingLaunchesContext.Provider value={upcomingLaunches}>
            <div className={styles.container}>
                <SideBar />
                <Content />
            </div>
        </UpcomingLaunchesContext.Provider>
    );
};

export default App;
