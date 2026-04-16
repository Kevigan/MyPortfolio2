import { useState } from 'react';
import AppChanger from '../../Home/AndroidApps/index';
import GameChanger from '../../Home/GameProjects/index';
import WebChanger from '../../Home/WebProjects/index';
import GameWebChanger from '../../Home/Game+Web/index';
import UnityToolsChanger from '../../Home/UnityTools/index';

import './index.scss';

const Logo = () => {
    const [activeTab, setActiveTab] = useState('unityTools');
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
            case 'unityTools':
                return <UnityTools />;
            default:
                return <UnityTools />;
        }
    };

    function setActiveButton(index) {
        setactiveGameIndex(index);

        switch (index) {
            case 1:
                setActiveTab('unityTools');
                break;
            case 2:
                setActiveTab('games');
                break;
            case 3:
                setActiveTab('skills'); // Game+Web
                break;
            case 4:
                setActiveTab('apps');
                break;
            case 5:
                setActiveTab('webDev');
                break;
            default:
                setActiveTab('unityTools');
                break;
        }
    }

    return (
        <div className="logo-container">
            <nav className="menu-bar">
                <button className={activeGameIndex === 1 ? 'active2' : ''} onClick={() => setActiveButton(1)}>
                    Unity Tools
                </button>
                <button className={activeGameIndex === 2 ? 'active2' : ''} onClick={() => setActiveButton(2)}>
                    Games
                </button>
                <button className={activeGameIndex === 3 ? 'active2' : ''} onClick={() => setActiveButton(3)}>
                    Game+Web
                </button>
                <button className={activeGameIndex === 4 ? 'active2' : ''} onClick={() => setActiveButton(4)}>
                    AndroidApps
                </button>
                <button className={activeGameIndex === 5 ? 'active2' : ''} onClick={() => setActiveButton(5)}>
                    Web Dev
                </button>
            </nav>

            <div className="content-container">
                {renderContent()}
            </div>
        </div>
    );
};

const Apps = () => <AppChanger />;
const Games = () => <GameChanger />;
const WebDev = () => <WebChanger />;
const GameWeb = () => <GameWebChanger />;
const UnityTools = () => <UnityToolsChanger />;

export default Logo;