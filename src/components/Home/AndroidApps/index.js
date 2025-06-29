import React, { useState } from 'react';
import GameWeb1 from './GameWeb1';
import GameWeb2 from './GameWeb2';
import GameWeb3 from './GameWeb3';

import '../GameProjects/index.scss';

const AppChanger = () => {
    const apps = [<GameWeb1 />, <GameWeb2 />, <GameWeb3 />]; 
    const [activeIndex, setactiveAppIndex] = useState(0);

    const handleNextApp = () => {
        setactiveAppIndex((prevIndex) => (prevIndex + 1) % apps.length);
    };

    const handlePreviousApp = () => {
        setactiveAppIndex((prevIndex) => (prevIndex - 1 + apps.length) % apps.length);
    };

    function showApp(index) {
        setactiveAppIndex(index);
    }

    return (
        <div className='top-game-container'>
            <nav>
                <button className={activeIndex === 0 ? 'active' : ''} onClick={() => showApp(0)}>Pokemon API</button>
                <button className={activeIndex === 1 ? 'active' : ''} onClick={() => showApp(1)}>Login</button>
                <button className={activeIndex === 2 ? 'active' : ''} onClick={() => showApp(2)}>PlayerStats + Achievements</button>
            </nav>
            <div className="Gamecontainer">
                <nav className="navigator">
                    <button className='navigator-button' onClick={handlePreviousApp}>← Previous</button>
                </nav>
                {apps[activeGameIndex]}
                <nav className="navigator">
                    <button className='navigator-button' onClick={handleNextApp}>Next →</button>
                </nav>
            </div>
        </div>
    );
}
export default AppChanger;