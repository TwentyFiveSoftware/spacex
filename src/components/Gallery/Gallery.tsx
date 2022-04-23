import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import type { Launch } from 'types/spacex';

const debounce = (fn: () => void, ms: number) => {
    let timeout: NodeJS.Timeout;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(fn, ms);
    };
};

const imageWidths: number[] = [];

interface Props {
    launch: Launch;
}

const Gallery: React.FC<Props> = ({ launch }: Props) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [imageRows, setImageRows] = useState<string[][]>([[...launch.links.flickr.original]]);

    const images = launch.links.flickr.original;

    const onLoad = (imageIndex: number, imageWidth: number) => {
        imageWidths[imageIndex] = imageWidth;

        if (imageWidths.length !== images.length) return;

        setImageRows(() => {
            const newRows: string[][] = [[]];
            let currentRowWidth = 0;
            let currentRowIndex = 0;

            for (let i = 0; i < imageWidths.length; i++) {
                currentRowWidth += imageWidths[i] + 30;
                newRows[currentRowIndex].push(images[i]);

                if (currentRowWidth + 150 - 30 > windowWidth) {
                    newRows.push([]);
                    currentRowIndex++;
                    currentRowWidth = 0;
                }
            }

            return newRows.filter(row => row.length > 1);
        });
    };

    useEffect(() => {
        const debouncedHandleResize = debounce(() => setWindowWidth(window.innerWidth), 100);

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        };
    }, []);

    return (
        <section className={styles.gallery}>
            {imageRows.map((row, i) => (
                <div className={styles.rowWrapper} key={i}>
                    <div className={styles.row}>
                        {row.map(image => (
                            <a href={image} target={'_blank'} key={`${windowWidth}-${images.indexOf(image)}`}>
                                <img
                                    src={image}
                                    alt={''}
                                    className={styles.image}
                                    onLoad={e =>
                                        onLoad(images.indexOf(image), e.currentTarget.getBoundingClientRect().width)
                                    }
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Gallery;
