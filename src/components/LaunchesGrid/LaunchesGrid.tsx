import React from 'react';
import styles from './LaunchesGrid.module.scss';
import { Link } from 'react-router-dom';
import type { Launch } from 'types/spacex';

const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

interface Props {
    launches: Launch[];
}

const LaunchesGrid: React.FC<Props> = ({ launches }: Props) => {
    return (
        <div className={styles.grid}>
            {launches.map(launch => (
                <Link to={`/launch/${launch.id}`} key={launch.id}>
                    <div className={styles.launch}>
                        <div className={styles.image}>
                            {launch.links.flickr.original[0] && <img src={launch.links.flickr.original[0]} alt={''} />}
                        </div>
                        <p className={styles.name}>{launch.name}</p>
                        <p className={styles.date}>{DATE_TIME_FORMAT.format(launch.date_unix * 1000)}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LaunchesGrid;
