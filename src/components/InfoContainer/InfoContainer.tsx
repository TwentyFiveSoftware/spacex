import React from 'react';
import styles from './InfoContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    title: string;
    texts: string[];
    image: string;
    details: {
        icon: IconProp;
        text: string;
    }[];
}

const InfoContainer: React.FC<Props> = ({ title, texts, image, details }: Props) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={''} />
            <div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.texts}>
                    {texts.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
                <ul className={styles.details}>
                    {details.map((detail, i) => (
                        <li className={styles.item} key={i}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={detail.icon} />
                            </div>
                            <p>{detail.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InfoContainer;
