import React, { useEffect, useState } from 'react';
import styles from './LaunchPage.module.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import { PAST_LAUNCHES_REQUEST_BODY } from 'queries/pastLaunches';
import Header from 'components/Header/Header';
import HeroSection from '../HeroSection/HeroSection';

const SPACEX_API_LAUNCHES_ENDPOINT = 'https://api.spacexdata.com/v4/launches/query';

const LaunchPage: React.FC = () => {
    const { launchId } = useParams<{ launchId: string }>();
    const [launch, setLaunch] = useState<Launch>();

    useEffect(() => {
        if (!launchId) return;

        (async () => {
            const { data } = await axios.post<{ docs: Launch[] }>(
                SPACEX_API_LAUNCHES_ENDPOINT,
                PAST_LAUNCHES_REQUEST_BODY,
                { headers: { 'Content-Type': 'application/json' } },
            );

            if (!data) return;
            setLaunch(data.docs.find(l => l.id === launchId));
        })();
    }, [launchId]);

    if (!launch) {
        return null;
    }

    console.log(launch);

    return (
        <div className={styles.page}>
            <Header />

            <HeroSection launch={launch} />

            <main>
                <div className={styles.heading}>
                    <div className={styles.left}>
                        <div className={styles.missionPatch} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.date}>{launch.date_unix}</div>
                        <h1 className={styles.name}>{launch.name}</h1>
                    </div>
                </div>

                <p className={styles.details}>{launch.details}</p>

                <div className={styles.info}>
                    <div className={styles.left}>
                        <div className={styles.image} />
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.title}>LAUNCHPAD</h2>
                        <div className={styles.texts}>
                            <p>{launch.launchpad.name}</p>
                            <p>{launch.launchpad.full_name}</p>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.icon} />
                                <div className={styles.text}>
                                    {launch.launchpad.locality} ({launch.launchpad.region})
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className={styles.gallery} />

            <section className={styles.webcast} />
        </div>
    );
};

export default LaunchPage;
