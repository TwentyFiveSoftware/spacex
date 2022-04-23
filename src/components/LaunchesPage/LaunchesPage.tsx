import React, { useEffect, useState } from 'react';
import styles from './LaunchesPage.module.scss';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import Header from 'components/Header/Header';
import LaunchesGrid from 'components/LaunchesGrid/LaunchesGrid';
import { PAST_LAUNCHES_REQUEST_BODY } from 'queries/pastLaunches';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

const LaunchesPage: React.FC = () => {
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
        <>
            <Header hideIcon={true} />

            <LaunchesGrid launches={launches} />
        </>
    );
};

export default LaunchesPage;
