import React, { useState } from 'react';
import MC_1 from '../../../assets/images/MoonCrush1.jpg';
import MC_2 from '../../../assets/images/MoonCrush2.jpg';
import MC_3 from '../../../assets/images/MoonCrush3.jpg';
import MC_4 from '../../../assets/images/MoonCrush4.jpg';

const Game4 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);

    const toggleExpand = (index) => {
        switch (index) {
            case 1:
                setExpandedImage1(!expanded1);
                console.log(index);
                break;
            case 2:
                setExpandedImage2(!expanded2);
                console.log(index);
                break;
            case 3:
                setExpandedImage3(!expanded3);
                console.log(index);
                break;
            case 4:
                setExpandedImage4(!expanded4);
                console.log(index);
                break;

        }
    };
    return (
        <div className="game-content">
            <div className='description'>
                <h1>MoonCrush</h1>
                <p>This game is a 3D pinball platformer. As the pinball moves from area to area, your camera will follow showing different parts of the level.</p>
                <p>
                    This was mainly built with blueprints.
                </p>
                <ul>
                    <li>Engine: Unreal Engine 4.7</li>
                    <li>Plattform: PC</li>
                    <li>Team size: 5</li>
                    <li>Time: 6 weeks</li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={MC_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={MC_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={MC_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={MC_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
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
    );
};

export default Game4;