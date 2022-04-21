import React from 'react';
import styles from './MainSection.module.scss';

interface Props {
    children: React.ReactNode[];
}

const MainSection: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default MainSection;
