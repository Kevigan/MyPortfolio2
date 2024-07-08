import React from 'react';
import DOT_1 from '../../../assets/images/DOT_1.png';
import DOT_2 from '../../../assets/images/DOT_2.png';
import DOT_3 from '../../../assets/images/DOT_3.png';
import DOT_4 from '../../../assets/images/DOT_4.png';

const Game3 = () => {
    return (
        <div className="game-content">
            <div className='description'>
                <h1>Defenders of Time</h1>
                <p>This game is a Tower Defense meets Tetris game. By defeating enemies you gain blocks to play Tetris. By destroying tetris rows you gain building blocks with which you can buy new towers.</p>
                <ul>
                    <li>Engine: Unreal Engine 4.7</li>
                    <li>Plattform: PC</li>
                    <li>Team size: 6</li>
                    <li>Time: 6 weeks</li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={DOT_1} alt="Game 1" />
                    <img src={DOT_2} alt="Game 2" />
                    <img src={DOT_3} alt="Game 3" />
                    <img src={DOT_4} alt="Game 4" />
                </div>
                <div>
                    <div class="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/fJfjScOjvBo"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game3;