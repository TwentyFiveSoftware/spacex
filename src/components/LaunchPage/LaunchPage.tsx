import React, { useEffect, useState } from 'react';
import styles from './LaunchPage.module.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import type { Launch } from 'types/spacex';
import { PAST_LAUNCHES_REQUEST_BODY } from 'queries/pastLaunches';
import {
    faClock,
    faEarth,
    faFire,
    faHelicopterSymbol,
    faIndustry,
    faLocationDot,
    faMoneyBillWave,
    faRing,
    faRuler,
    faSackDollar,
    faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import Header from 'components/Header/Header';
import HeroSection from 'components/HeroSection/HeroSection';
import Heading from 'components/Heading/Heading';
import MainSection from 'components/MainSection/MainSection';
import InfoContainer from 'components/InfoContainer/InfoContainer';
import Gallery from 'components/Gallery/Gallery';
import Webcast from 'components/Webcast/Webcast';

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

    return (
        <>
            <Header />

            <HeroSection launch={launch} />

            <MainSection>
                <Heading launch={launch} />

                <p className={styles.details}>{launch.details}</p>

                <div className={styles.info}>
                    <InfoContainer
                        title={'LAUNCHPAD'}
                        texts={[launch.launchpad.name, launch.launchpad.full_name]}
                        image={launch.launchpad.images.large[0] ?? ''}
                        details={[
                            {
                                icon: faLocationDot,
                                text: `${launch.launchpad.locality} (${launch.launchpad.region})`,
                            },
                            {
                                icon: faClock,
                                text: launch.launchpad.timezone,
                            },
                        ]}
                    />

                    <InfoContainer
                        title={'ROCKET'}
                        texts={[launch.rocket.name]}
                        image={launch.rocket.flickr_images[0] ?? ''}
                        details={[
                            {
                                icon: faSackDollar,
                                text: `${Intl.NumberFormat('en', {
                                    style: 'currency',
                                    currency: 'USD',
                                    maximumFractionDigits: 0,
                                }).format(launch.rocket.cost_per_launch)} / launch`,
                            },
                            {
                                icon: faRing,
                                text: `${launch.rocket.stages} stages, ${launch.rocket.boosters} boosters`,
                            },
                            {
                                icon: faRuler,
                                text:
                                    `${Intl.NumberFormat('en').format(launch.rocket.height.meters)}m tall, ` +
                                    `${Intl.NumberFormat('en').format(launch.rocket.diameter.meters)}m in diameter`,
                            },
                            {
                                icon: faFire,
                                text:
                                    `${launch.rocket.engines.number} ${launch.rocket.engines.type} engines ` +
                                    `(${launch.rocket.engines.propellant_1} + ${launch.rocket.engines.propellant_2}) ` +
                                    `in ${launch.rocket.engines.layout} layout`,
                            },
                        ]}
                    />

                    <InfoContainer
                        title={'LANDPAD'}
                        texts={[launch.cores[0].landpad?.name ?? '', launch.cores[0].landpad?.full_name ?? '']}
                        image={launch.cores[0].landpad?.images.large[0] ?? ''}
                        details={[
                            {
                                icon: faLocationDot,
                                text: `${launch.cores[0].landpad?.locality} (${launch.cores[0].landpad?.region})`,
                            },
                            {
                                icon: faHelicopterSymbol,
                                text: launch.cores[0].landpad?.type ?? '',
                            },
                        ]}
                    />

                    <InfoContainer
                        title={'PAYLOAD'}
                        texts={[launch.payloads[0].type, launch.payloads[0].name]}
                        image={'https://live.staticflickr.com/65535/51492841327_92e805e83c_b.jpg'}
                        details={[
                            {
                                icon: faMoneyBillWave,
                                text: launch.payloads[0].customers.join(', '),
                            },
                            {
                                icon: faIndustry,
                                text: launch.payloads[0].manufacturers.join(', '),
                            },
                            {
                                icon: faEarth,
                                text: `${launch.payloads[0].orbit} (${launch.payloads[0].regime})`,
                            },
                            ...(launch.payloads[0].mass_kg
                                ? [
                                      {
                                          icon: faWeightHanging,
                                          text: `${Intl.NumberFormat('en').format(launch.payloads[0].mass_kg ?? 0)}kg`,
                                      },
                                  ]
                                : []),
                        ]}
                    />
                </div>
            </MainSection>

            <Gallery launch={launch} />

            <Webcast launch={launch} />
        </>
    );
};

export default LaunchPage;
