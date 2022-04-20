import React from 'react';
import { useParams } from 'react-router-dom';

const LaunchPage: React.FC = () => {
    const { launchId } = useParams<{ launchId: string }>();

    return <div>{launchId}</div>;
};

export default LaunchPage;
