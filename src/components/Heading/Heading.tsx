import React from 'react';
import styles from './Heading.module.scss';
import type { Launch } from 'types/spacex';

interface Props {
    launch: Launch;
}

const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

const Heading: React.FC<Props> = ({ launch }: Props) => {
    return (
        <div className={styles.heading}>
            <img className={styles.missionPatch} src={launch.links.patch.large} alt={''} />
            <div>
                <div className={styles.date}>{DATE_TIME_FORMAT.format(launch.date_unix * 1000)}</div>
                <h1 className={styles.name}>{launch.name}</h1>
            </div>
        </div>
    );
};

export default Heading;
