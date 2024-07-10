import React, { useState } from 'react';
import Simon1 from '../../../assets/images/Simon1.png';
import Simon3 from '../../../assets/images/Simon3.png';

const Game5 = () => {
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
                <h1>Simon Says</h1>
                <p>This is a simple Simon says game for your WebBrowser. The code for this game is not embedded on this website; it is a link to another site i made. </p>
                <ul>
                    <li>Engine: Unreal Engine 5.2</li>
                    <li>Plattform: PC</li>
                    <li>Browser link: <a href="https://kevigan.github.io/Simon__Says/" target="_blank" rel="noopener noreferrer"> Link</a></li>
                    <li>Github-Link: </li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Simon1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={Simon3} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={Simon1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={Simon3} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                </div>
                <div class="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://kevigan.github.io/Simon__Says/"
                        class="responsive-iframe"
                        frameborder="0"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Game5;