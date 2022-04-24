import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import { LAUNCHES_REQUEST_BODY } from './queries/launches';
import LaunchPage from 'components/LaunchPage/LaunchPage';
import LaunchesPage from 'components/LaunchesPage/LaunchesPage';

const App: React.FC = () => {
    const [launches, setLaunches] = useState<Launch[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.post<{ docs: Launch[] }>(
                'https://api.spacexdata.com/v4/launches/query',
                LAUNCHES_REQUEST_BODY,
                {
                    headers: { 'Content-Type': 'application/json' },
                },
            );

            if (!data) return;
            setLaunches(data.docs);
        })();
    }, []);

    return (
        <Routes>
            <Route path={'/launch/:launchId'} element={<LaunchPage launches={launches} />} />
            <Route
                path={'/upcoming'}
                element={
                    <LaunchesPage
                        launches={launches
                            .filter(launch => launch.upcoming)
                            .sort((a, b) => (a.date_unix > b.date_unix ? 1 : -1))}
                    />
                }
            />
            <Route path={'/'} element={<LaunchesPage launches={launches.filter(launch => !launch.upcoming)} />} />
            <Route path={'*'} element={null} />
        </Routes>
    );
};

export default App;
