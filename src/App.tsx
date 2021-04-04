import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';
import styles from './styles/App.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <SideBar/>
            <Content/>
        </div>
    );
};

export default App;
