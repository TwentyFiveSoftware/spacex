import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.icon}>
                    <Link to={'/'} />
                </div>
                <img
                    className={styles.logo}
                    src={'https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg'}
                    alt={'SpaceX'}
                />
                <div className={styles.links}>
                    <Link to={'/'}>
                        <div className={styles.link}>PAST LAUNCHES</div>
                    </Link>
                    <Link to={'/upcoming'}>
                        <div className={styles.link}>UPCOMING LAUNCHES</div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
