import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import { PAST_LAUNCHES_REQUEST_BODY } from 'queries/pastLaunches';
import LaunchPage from 'components/LaunchPage/LaunchPage';
import LaunchesPage from 'components/LaunchesPage/LaunchesPage';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

const App: React.FC = () => {
    const [launches, setLaunches] = useState<Launch[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.post<{ docs: Launch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                PAST_LAUNCHES_REQUEST_BODY,
                { headers: { 'Content-Type': 'application/json' } },
            );

            if (!data) return;
            setLaunches(data.docs);
        })();
    }, []);

    return (
        <Routes>
            <Route path={'/launch/:launchId'} element={<LaunchPage launches={launches} />} />
            <Route path={'/'} element={<LaunchesPage launches={launches} />} />
            <Route path={'*'} element={null} />
        </Routes>
    );
};

export default App;
