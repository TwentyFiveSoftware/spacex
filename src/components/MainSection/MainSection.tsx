import React from 'react';
import styles from './MainSection.module.scss';

interface Props {
    children: React.ReactNode[] | React.ReactNode;
    dark?: boolean;
}

const MainSection: React.FC<Props> = ({ children, dark = false }: Props) => {
    return (
        <div className={`${styles.wrapper} ${dark ? styles.wrapper__dark : ''}`}>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default MainSection;
