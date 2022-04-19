import React from 'react';
import styles from './LaunchContainer.module.scss';

interface Props {
    active: boolean;
    flightNumber: number;
    name: string;
    rocketName: string;
    launchPadName: string;
    payload: string;
    date: number;
    onClick: () => void;
}

const formatDate = (date: number) => {
    const DATE_TIME_FORMAT = Intl.DateTimeFormat('de', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return DATE_TIME_FORMAT.format(new Date(date * 1000));
};

const LaunchContainer: React.FC<Props> = ({
    active,
    flightNumber,
    name,
    rocketName,
    launchPadName,
    payload,
    date,
    onClick,
}: Props) => {
    return (
        <div className={active ? styles.container : styles.containerInactive} onClick={() => onClick()}>
            <p className={styles.flightNumber}>#{flightNumber.toString()}</p>
            <p className={styles.name}>{name}</p>
            <div className={styles.flexRow}>
                <p>{formatDate(date)}</p>
                <p className={styles.spacer}>•</p>
                <p>{rocketName}</p>
            </div>
            <div className={styles.flexRow}>
                <p>{launchPadName}</p>
                <p className={styles.spacer}>•</p>
                <p>{payload}</p>
            </div>
        </div>
    );
};

export default LaunchContainer;
