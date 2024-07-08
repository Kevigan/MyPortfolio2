import React, { useState } from 'react';
import Web1 from './Web1';
import Web2 from './Web2';
import Web3 from './Web3';
import Web4 from './Web4';
import Web5 from './Web5';
import Web6 from './Web6';
import Web7 from './Web7';
import '../GameProjects/index.scss';

const WebChanger = () => {
    const games = [<Web1 />, <Web2 />, <Web3 />, <Web4 />, <Web5/>, <Web6/>, <Web7/>]; 
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
                <button className={activeGameIndex === 0 ? 'active' : ''} onClick={() => showGame(0)}>This web page</button>
                <button className={activeGameIndex === 1 ? 'active' : ''} onClick={() => showGame(1)}>HTML</button>
                <button className={activeGameIndex === 2 ? 'active' : ''} onClick={() => showGame(2)}>Bootstrap</button>
                <button className={activeGameIndex === 3 ? 'active' : ''} onClick={() => showGame(3)}>EJS</button>
                <button className={activeGameIndex === 4 ? 'active' : ''} onClick={() => showGame(4)}>API</button>
                <button className={activeGameIndex === 5 ? 'active' : ''} onClick={() => showGame(5)}>Own Blog API</button>
                <button className={activeGameIndex === 6 ? 'active' : ''} onClick={() => showGame(6)}>PostgreSQL</button>
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
export default WebChanger;