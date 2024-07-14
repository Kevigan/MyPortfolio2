import React, { useState } from 'react';

import TW_1 from '../../../assets/images/Twitch_1.jpg';
import TW_2 from '../../../assets/images/Twitch_2.jpg';
import TW_3 from '../../../assets/images/Twitch_3.jpg';
import TW_4 from '../../../assets/images/Twitch_4.jpg';

const Game7 = () => {
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
                <h1>Twitch Chat Connection</h1>
                <p>Connecting Twitch Chat to a simple game made in Unity.</p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Plattform: PC</li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={TW_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={TW_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={TW_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={TW_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Sf4tqvTwnCo"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        mozallowfullscreen
                        oallowfullscreen
                        msallowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Game7;