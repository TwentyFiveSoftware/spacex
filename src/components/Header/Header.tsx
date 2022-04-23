import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link to={'/'} className={styles.icon}>
                    <FontAwesomeIcon icon={faGrip} />
                </Link>
                <Link to={'/'} className={styles.logo}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg'} alt={'SpaceX'} />
                </Link>
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
