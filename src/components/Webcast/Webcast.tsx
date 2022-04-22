import React from 'react';
import styles from './Webcast.module.scss';
import type { Launch } from 'types/spacex';

interface Props {
    launch: Launch;
}

const Webcast: React.FC<Props> = ({ launch }: Props) => {
    if (!launch.links.youtube_id) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.webcastWrapper}>
                    <iframe
                        className={styles.webcast}
                        src={`https://www.youtube-nocookie.com/embed/${launch.links.youtube_id}`}
                        frameBorder={0}
                        allow={
                            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        }
                        allowFullScreen={true}
                    />
                </div>
            </section>
        </div>
    );
};

export default Webcast;
