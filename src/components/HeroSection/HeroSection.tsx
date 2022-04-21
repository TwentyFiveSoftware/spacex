import React from 'react';
import styles from './HeroSection.module.scss';
import type { Launch } from 'types/spacex';

interface Props {
    launch: Launch;
}

const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

const HeroSection: React.FC<Props> = ({ launch }: Props) => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.sideWrapper}>
                    <div className={styles.side}>
                        <span>#{launch.flight_number}</span>
                        <span>{launch.name}</span>
                        <span>{DATE_TIME_FORMAT.format(launch.date_unix * 1000)}</span>
                    </div>
                </div>

                <div className={styles.image} />
            </section>
        </div>
    );
};

export default HeroSection;
