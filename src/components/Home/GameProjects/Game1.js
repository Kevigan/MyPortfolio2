import React, { useState } from 'react';
import Edge_1 from '../../../assets/images/Edge_1.png';
import Edge_2 from '../../../assets/images/Edge_2.png';
import Edge_3 from '../../../assets/images/Edge_3.png';
import Edge_4 from '../../../assets/images/Edge_4.png';

const Game1 = () => {
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
                <h1>Project Edge</h1>
                <p>This game is a 3 vs 3 Multiplayer Shooter. Each round lasts 10 min or ends when one team reaches 30 kills.
                    The team, which won the most after 10 rounds wins. Visually inspired by Happy Tree Friends.
                </p>
                <p>
                    This was mainly built with C++.
                </p>
                <ul>
                    <li>Engine: Unreal Engine 5.2</li>
                    <li>Plattform: PC</li>
                    <li>Controller supported</li>
                    <li>Team size: 6</li>
                    <li>Time: 8 weeks</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/EdgeCode.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Edge_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={Edge_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={Edge_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={Edge_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/T4q30wdHfPg"
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

export default Game1;