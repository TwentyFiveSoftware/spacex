import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LaunchPage from 'components/LaunchPage/LaunchPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={'/launch/:launchId'} element={<LaunchPage />} />
            <Route path={'*'} element={null} />
        </Routes>
    );
};

export default App;
