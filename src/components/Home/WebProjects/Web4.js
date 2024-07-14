import React, { useState } from 'react';
import Band_1 from '../../../assets/images/BandGenerator1.jpg';
import Band_2 from '../../../assets/images/BandGenerator2.jpg';
import Band_3 from '../../../assets/images/BandGenerator3.jpg';
import Band_4 from '../../../assets/images/BandGenerator4.jpg';
import EJS_Icon from '../../../assets/images/EJS_Icon.png';

const Web4 = () => {
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
                <h1>Band Generator</h1>
                <p>Generates random band names.</p>
                <ul>
                    <li>Built with EJS</li>
                    <li>Github link: <a href="https://github.com/Kevigan/BandGenerator.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Band_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={Band_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={Band_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={Band_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="pic-container">
                    <img src={EJS_Icon}  alt="Game 4"  />
                </div>
            </div>
        </div>
    );
};

export default Web4;