import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LaunchPage from 'components/LaunchPage/LaunchPage';
import LaunchesPage from 'components/LaunchesPage/LaunchesPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={'/launch/:launchId'} element={<LaunchPage />} />
            <Route path={'/'} element={<LaunchesPage />} />
            <Route path={'*'} element={null} />
        </Routes>
    );
};

export default App;
