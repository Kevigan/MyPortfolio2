import { useEffect, useState } from 'react';
import GameChanger from '../../Home/GameProjects/index';
import WebChanger from '../../Home/WebProjects/index';
import GameWebChanger from '../../Home/Game+Web/index';

import './index.scss';

const Logo = () => {
    
    const [visible, setVisible] = useState(true);

    const [activeTab, setActiveTab] = useState('games');
    const [activeGameIndex, setactiveGameIndex] = useState(1);

    const renderContent = () => {
        switch (activeTab) {
            case 'apps':
                return <Apps />;
            case 'games':
                return <Games />;
            case 'webDev':
                return <WebDev />;
            case 'skills':
                return <GameWeb />;
            default:
                return <Games />;
        }
    };

    function setActiveButton(index) {
        setactiveGameIndex(index);
        console.log(index);
        switch(index){
            case 1:
                setActiveTab('apps');
                break;
            case 2:
                setActiveTab('games');
                break;
            case 3: 
                setActiveTab('webDev');
                break;
            case 4:
                setActiveTab('skills');
                break;

        }
    }

    return (
        <div className="logo-container" >
            <nav className="menu-bar">
                <button className={activeGameIndex === 1 ? 'active2' : ''} onClick={() => setActiveButton(1)}>Games </button>
                <button className={activeGameIndex === 2 ? 'active2' : ''} onClick={() => setActiveButton(1)}>Apps </button>
                <button className={activeGameIndex === 3 ? 'active2' : ''} onClick={() => setActiveButton(2)}>Web Dev </button>
                <button className={activeGameIndex === 4 ? 'active2' : ''} onClick={() => setActiveButton(3)}>Game+Web</button>
            </nav>
            <div className="content-container">
                    
                    {renderContent()}
            </div>
        </div>
    )
}

const Apps = () => (

    <AppChanger />
);

const Games = () => (

    <GameChanger />
);

const WebDev = () => (
    <WebChanger />
);

const GameWeb = () => (
    <GameWebChanger />
);

export default Logo;