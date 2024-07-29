import React, { useState } from 'react';
import DOT_1 from '../../../assets/images/DOT_1.jpg';
import DOT_2 from '../../../assets/images/DOT_2.jpg';
import DOT_3 from '../../../assets/images/DOT_3.jpg';
import DOT_4 from '../../../assets/images/DOT_4.jpg';

const Game3 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                break;
            case 3:
                setExpandedImage3(!expanded3);
                break;
            case 4:
                setExpandedImage4(!expanded4);
                break;
            default:
                break;
        }
    };
    return (
        <div className="game-content">
            <div className='description'>
                <h1>Defenders of Time</h1>
                <p>This game is a Tower Defense meets Tetris game. By defeating enemies you gain blocks to play Tetris.
                    By destroying tetris rows you gain building blocks with which you can buy new towers.
                </p>
                <p>
                    This was mainly built with blueprints.
                </p>
                <ul>
                    <li>Engine: Unreal Engine 4.7</li>
                    <li>Plattform: PC</li>
                    <li>Team size: 6</li>
                    <li>Time: 6 weeks</li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={DOT_1} className={expanded1 ? 'expanded' : 'normal'} alt="Birds view map" onClick={() => toggleExpand(1)} />
                    <img src={DOT_2} className={expanded2 ? 'expanded' : 'normal'} alt="Birds view map" onClick={() => toggleExpand(2)} />
                    <img src={DOT_3} className={expanded3 ? 'expanded' : 'normal'} alt="Birds view map" onClick={() => toggleExpand(3)} />
                    <img src={DOT_4} className={expanded4 ? 'expanded' : 'normal'} alt="Birds view map" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
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
    );
};

export default Game3;