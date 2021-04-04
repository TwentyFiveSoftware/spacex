import React, { FunctionComponent } from 'react';
import styles from '../styles/InfoContainer.module.scss';

const InfoContainer: FunctionComponent<{ title: string; text?: string }> = ({ title, text, children }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div>
            {text && <p className={styles.text}>{text}</p>}
        </section>
    );
};

export default InfoContainer;
