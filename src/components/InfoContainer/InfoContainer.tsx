import React from 'react';
import styles from './InfoContainer.module.scss';

interface Props {
    title: string;
    text?: string;
    children: React.ReactNode;
}

const InfoContainer: React.FC<Props> = ({ title, text, children }: Props) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div>
            {text && <p className={styles.text}>{text}</p>}
        </section>
    );
};

export default InfoContainer;
