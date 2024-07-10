import React, { useState } from 'react';
import GAS_1 from '../../../assets/images/GAS_1.png';
import GAS_2 from '../../../assets/images/GAS_2.png';
import GAS_3 from '../../../assets/images/GAS_3.png';
import GAS_4 from '../../../assets/images/GAS_4.png';

const Game2 = () => {
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
                    <img src={GAS_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={GAS_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={GAS_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={GAS_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
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
    );
};

export default Game2;