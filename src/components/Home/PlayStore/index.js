import React, { useState } from 'react';
import App1 from './app1';
import './index.scss';

const PlayStore = () => {
    const apps = [<App1 />];
    const [activeGameIndex, setactiveGameIndex] = useState(0);

    const handleNextGame = () => {
        setactiveGameIndex((prevIndex) => (prevIndex + 1) % apps.length);
    };

    const handlePreviousGame = () => {
        setactiveGameIndex((prevIndex) => (prevIndex - 1 + apps.length) % apps.length);
    };

    function showGame(index) {
        setactiveGameIndex(index);
    }

    return (
        <div className='playstore-section'>
            <div className='top-game-container'>
                <nav>
                    <button
                        className={activeGameIndex === 0 ? 'active' : ''}
                        onClick={() => showGame(0)}
                    >
                        OnlyOne
                    </button>
                </nav>

                <div className="Gamecontainer">
                    <nav className="navigator">
                        <button className='navigator-button' onClick={handlePreviousGame}>
                            ? Previous
                        </button>
                    </nav>

                    {apps[activeGameIndex]}

                    <nav className="navigator">
                        <button className='navigator-button' onClick={handleNextGame}>
                            Next ?
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PlayStore;