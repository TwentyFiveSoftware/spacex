import React from 'react';
import styles from '../styles/GroupWrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

const GroupWrapper: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.circle} />
                <div className={styles.line} />
            </div>
            <div>{children}</div>
        </div>
    );
};

export default GroupWrapper;
