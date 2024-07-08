import React from 'react';
import GAS_1 from '../../../assets/images/GAS_1.png';
import GAS_2 from '../../../assets/images/GAS_2.png';
import GAS_3 from '../../../assets/images/GAS_3.png';
import GAS_4 from '../../../assets/images/GAS_4.png';

const Game2 = () => {
    return (
        <div className="game-content">
        <div className='description'>
            <h1>Learning Unreals GAS</h1>
            <p> This is a learning project about learning the fundamentals of unreal GAS. I learned how to implement a Ability System, Attribute Set, using  Gameplay Effects/Abilities and much more. </p>
            <ul>
                <li>Engine: Unreal Engine 5.2</li>
                <li>Plattform: PC</li>
                <li>Controller supported</li>
                <li>Time: 6 weeks</li>
                <li>Github-Link: </li>
            </ul>
        </div>
        <div className='game-image-container'>
            <div className='image-grid'>
                <img src={GAS_1} alt="Game 1" />
                <img src={GAS_2} alt="Game 1" />
                <img src={GAS_3} alt="Game 1" />
                <img src={GAS_4} alt="Game 1" />
            </div>
            <div>
                <div class="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/UT96AgEp_pw"
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

export default Game2;