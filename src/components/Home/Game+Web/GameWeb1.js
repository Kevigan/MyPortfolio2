import React, { useState } from 'react';
import Pokemon_1 from '../../../assets/images/Pokemon_1.jpg';
import Pokemon_2 from '../../../assets/images/Pokemon_2.jpg';
import Pokemon_3 from '../../../assets/images/Pokemon_3.jpg';
import Pokemon_4 from '../../../assets/images/Pokemon_4.jpg';

const GameWeb1 = () => {
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
                <h1>Project Pokemon</h1>
                <p>In this project I am using a public pokemon API for rendering the images and getting each stat like HP, Attack or Defense.
                </p>
                <p>
                    I used Unity and C# for this project.
                </p>
                <ul>
                    <li>Engine: Unity</li>
                    <li>Plattform: PC</li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/Pokemon.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                    <li>API-Link: <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Pokemon_1} className={expanded1 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(1)} />
                    <img src={Pokemon_2} className={expanded2 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(2)} />
                    <img src={Pokemon_3} className={expanded3 ? 'expanded' : 'normal'} alt="Pokemon battle Salandit and politoed" onClick={() => toggleExpand(3)} />
                    <img src={Pokemon_4} className={expanded4 ? 'expanded' : 'normal'} alt="Battle win politoed" onClick={() => toggleExpand(4)} />
                </div>
                <div class="video-container">
                    <iframe className='video-frame'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cuK5V2GsojY"
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

export default GameWeb1;