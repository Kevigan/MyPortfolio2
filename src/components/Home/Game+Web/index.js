import React, { useState } from 'react';
import GameWeb1 from './GameWeb1';

import '../GameProjects/index.scss';

const GameWebChanger = () => {
    const games = [<GameWeb1 />]; 
    const [activeGameIndex, setactiveGameIndex] = useState(0);

    const handleNextGame = () => {
        setactiveGameIndex((prevIndex) => (prevIndex + 1) % games.length);
    };

    const handlePreviousGame = () => {
        setactiveGameIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
    };

    function showGame(index) {
        setactiveGameIndex(index);
    }

    return (
        <div className='top-game-container'>
            <nav>
                <button className={activeGameIndex === 0 ? 'active' : ''} onClick={() => showGame(0)}>Pokemon API</button>
                
            </nav>
            <div className="Gamecontainer">
                <nav className="navigator">
                    <button className='navigator-button' onClick={handlePreviousGame}>← Previous</button>
                </nav>
                {games[activeGameIndex]}
                <nav className="navigator">
                    <button className='navigator-button' onClick={handleNextGame}>Next →</button>
                </nav>
            </div>
        </div>
    );
}
export default GameWebChanger;