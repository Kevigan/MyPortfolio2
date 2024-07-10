import { useEffect, useState } from 'react';
import Edge from '../../../assets/images/Edge.png';
import DefendersOfTime from '../../../assets/images/DefendersOfTime.png';
import MoonCrush from '../../../assets/images/MoonCrush.png';
import MoonCrush2 from '../../../assets/images/MoonCrush2.png';
import Edge_1 from '../../../assets/images/Edge_1.png';
import Edge_2 from '../../../assets/images/Edge_2.png';
import Edge_3 from '../../../assets/images/Edge_3.png';
import GameChanger from '../../Home/GameProjects/index';
import WebChanger from '../../Home/WebProjects/index';

import './index.scss';

const Logo = () => {
    const images = [Edge, Edge_1, Edge_2, Edge_3, DefendersOfTime, MoonCrush, MoonCrush2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const [activeTab, setActiveTab] = useState('games');
    const [activeGameIndex, setactiveGameIndex] = useState(1);
    console.log(activeGameIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
                setVisible(true);
            }, 500)
        }, 5000);
        return () => clearInterval(interval);

    }, [images.length])

    const renderContent = () => {
        switch (activeTab) {
            case 'games':
                return <Games />;
            case 'webDev':
                return <WebDev />;
            case 'skills':
                return <Skills />;
            default:
                return <Games />;
        }
    };

    function setActiveButton(index) {
        setactiveGameIndex(index);
        console.log(index);
        switch(index){
            case 1:
                setActiveTab('games');
                break;
            case 2: 
                setActiveTab('webDev');
                break;
            case 3:
                setActiveTab('skills');
                break;

        }
    }

    return (
        <div className="logo-container" >
            <nav className="menu-bar">
                <button className={activeGameIndex === 1 ? 'active2' : ''} onClick={() => setActiveButton(1)}>Games </button>
                <button className={activeGameIndex === 2 ? 'active2' : ''} onClick={() => setActiveButton(2)}>Web Dev </button>
            </nav>
            <div className="content-container">
                    
                    {renderContent()}
            </div>
        </div>
    )
}

const Games = () => (

    <GameChanger />
);

const WebDev = () => (
    <WebChanger />
);

const Skills = () => (
    <div>
        <h2>Skills</h2>
        <p>Skills and competencies...</p>
    </div>
);

export default Logo;