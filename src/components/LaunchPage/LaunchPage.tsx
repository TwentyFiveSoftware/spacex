import React from 'react';
import styles from './LaunchPage.module.scss';
import { useParams } from 'react-router-dom';
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
import type { Launch } from 'types/spacex';
import Header from 'components/Header/Header';
import HeroSection from 'components/HeroSection/HeroSection';
import Heading from 'components/Heading/Heading';
import MainSection from 'components/MainSection/MainSection';
import InfoContainer from 'components/InfoContainer/InfoContainer';
import Gallery from 'components/Gallery/Gallery';
import Webcast from 'components/Webcast/Webcast';

interface Props {
    launches: Launch[];
}

const LaunchPage: React.FC<Props> = ({ launches }: Props) => {
    const { launchId } = useParams<{ launchId: string }>();
    const launch = launches.find(l => l.id === launchId);

    if (!launch) {
        return null;
    }

    return (
        <>
            <Header />

            <HeroSection launch={launch} />

            <MainSection>
                <Heading launch={launch} />

                {launch.details && <p className={styles.details}>{launch.details}</p>}

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

                    {launch.cores.map(
                        ({ landpad }, i) =>
                            landpad && (
                                <InfoContainer
                                    key={i}
                                    title={`LANDPAD${launch.cores.length > 1 ? ` #${i + 1}` : ''}`}
                                    texts={[landpad.name, landpad.full_name]}
                                    image={landpad.images.large[0]}
                                    details={[
                                        {
                                            icon: faLocationDot,
                                            text: `${landpad.locality} (${landpad.region})`,
                                        },
                                        {
                                            icon: faHelicopterSymbol,
                                            text: landpad.type,
                                        },
                                    ]}
                                />
                            ),
                    )}

                    {launch.payloads.map((payload, i) => (
                        <InfoContainer
                            key={i}
                            title={`PAYLOAD${launch.payloads.length > 1 ? ` #${i + 1}` : ''}`}
                            texts={[payload.type, payload.name]}
                            image={'https://live.staticflickr.com/65535/51492841327_92e805e83c_b.jpg'}
                            details={[
                                {
                                    icon: faMoneyBillWave,
                                    text: payload.customers.length === 0 ? '' : payload.customers.join(', '),
                                },
                                {
                                    icon: faIndustry,
                                    text: payload.manufacturers.length === 0 ? '' : payload.manufacturers.join(', '),
                                },
                                {
                                    icon: faEarth,
                                    text: `${payload.orbit}${payload.regime ? ` (${payload.regime})` : ''}`,
                                },
                                {
                                    icon: faWeightHanging,
                                    text: !payload.mass_kg
                                        ? ''
                                        : `${Intl.NumberFormat('en').format(payload.mass_kg ?? 0)}kg`,
                                },
                            ]}
                        />
                    ))}
                </div>
            </MainSection>

            <Gallery launch={launch} />

            <Webcast launch={launch} />
        </>
    );
};

export default LaunchPage;
