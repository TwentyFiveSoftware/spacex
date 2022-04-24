import React from 'react';
import type { Launch } from 'types/spacex';
import Header from 'components/Header/Header';
import LaunchesGrid from 'components/LaunchesGrid/LaunchesGrid';
import MainSection from 'components/MainSection/MainSection';

interface Props {
    launches: Launch[];
}

const LaunchesPage: React.FC<Props> = ({ launches }: Props) => {
    return (
        <>
            <Header hideIcon={true} />

            <MainSection dark={true}>
                <LaunchesGrid launches={launches} />
            </MainSection>
        </>
    );
};

export default LaunchesPage;
