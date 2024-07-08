import React from 'react';
import MC_1 from '../../../assets/images/MoonCrush1.png';
import MC_2 from '../../../assets/images/MoonCrush2.png';
import MC_3 from '../../../assets/images/MoonCrush3.png';
import MC_4 from '../../../assets/images/MoonCrush4.png';

const Game4 = () => {
    return (
        <div className="game-content">
            <div className='description'>
                <h1>MoonCrush</h1>
                <p>This game is a 3D pinball platformer. </p>
                <ul>
                    <li>Engine: Unreal Engine 4.7</li>
                    <li>Plattform: PC</li>
                    <li>Team size: 5</li>
                    <li>Time: 6 weeks</li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={MC_1} alt="Game 1" />
                    <img src={MC_2} alt="Game 2" />
                    <img src={MC_3} alt="Game 3" />
                    <img src={MC_4} alt="Game 4" />
                </div>
                <div>
                    <div class="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/wZU-oVwlako"
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

export default Game4;