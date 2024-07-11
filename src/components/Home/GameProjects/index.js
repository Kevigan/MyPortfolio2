import React, { useState } from 'react';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Game4 from './Game4';
import Game5 from './Game5';
import Game6 from './Game6';
import Game7 from './Game7';
import './index.scss';

const GameChanger = () => {
    const games = [<Game1 />, <Game2 />, <Game3 />, <Game4 />, <Game5 />, <Game6 />, <Game7 />]; 
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
                <button className={activeGameIndex === 0 ? 'active' : ''} onClick={() => showGame(0)}>Project Edge</button>
                <button className={activeGameIndex === 1 ? 'active' : ''} onClick={() => showGame(1)}>GAS</button>
                <button className={activeGameIndex === 2 ? 'active' : ''} onClick={() => showGame(2)}>DefendersOfTime</button>
                <button className={activeGameIndex === 3 ? 'active' : ''} onClick={() => showGame(3)}>MoonCrush</button>
                <button className={activeGameIndex === 4 ? 'active' : ''} onClick={() => showGame(4)}>BrowserGame</button>
                <button className={activeGameIndex === 5 ? 'active' : ''} onClick={() => showGame(5)}>CloudJump</button>
                <button className={activeGameIndex === 6 ? 'active' : ''} onClick={() => showGame(6)}>TwitchChat</button>
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
export default GameChanger;