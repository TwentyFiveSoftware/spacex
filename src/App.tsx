import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import axios from 'axios';
import type { ILaunch } from './types/SpaceX';
import upcomingLaunchesRequestBody from './queries/upcoming_launches.json';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

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
        <div>
            <h1 className={styles.title}>SpaceX</h1>
        </div>
    );
};

export default App;
