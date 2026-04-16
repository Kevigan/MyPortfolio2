import React, { useState } from 'react';
import AndroidApp1 from './AndroidApp1';
import AndroidApp2 from './AndroidApp2';
import AndroidApp3 from './AndroidApp3';
import AndroidApp4 from './AndroidApp4';
import AndroidApp5 from './AndroidApp5';

import '../GameProjects/index.scss';

const AppChanger = () => {
    const apps = [<AndroidApp1 />,<AndroidApp2 />,<AndroidApp3 />,<AndroidApp4 />,<AndroidApp5 />]; 
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
                <button className={activeIndex === 0 ? 'active' : ''} onClick={() => showApp(0)}>Finanz Tracker</button>
                 <button className={activeIndex === 1 ? 'active' : ''} onClick={() => showApp(1)}>Chat App</button>
                  <button className={activeIndex === 2 ? 'active' : ''} onClick={() => showApp(2)}>Workout Planner</button>
                   <button className={activeIndex === 3 ? 'active' : ''} onClick={() => showApp(3)}>Trivia Game</button>
                    <button className={activeIndex === 4 ? 'active' : ''} onClick={() => showApp(4)}>Task Manager</button>
            </nav>
            <div className="Gamecontainer">
                <nav className="navigator">
                    <button className='navigator-button' onClick={handlePreviousApp}>← Previous</button>
                </nav>
                {apps[activeIndex]}
                <nav className="navigator">
                    <button className='navigator-button' onClick={handleNextApp}>Next →</button>
                </nav>
            </div>
        </div>
    );
}
export default AppChanger;