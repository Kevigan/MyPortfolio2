import React, { useState } from 'react';
import HTML_1 from '../../../assets/images/basicHTML.png';
import HTML_2 from '../../../assets/images/basicHTML2.png';
import HTML_Icon from '../../../assets/images/html_Icon.png';

const Web2 = () => {
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
                <h1>HTML</h1>
                <p>Just some plain old HTML</p>
                <ul>
                    <li>Github-Link: <a href="https://github.com/Kevigan/HTML.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={HTML_1} className={expanded1 ? 'expanded' : 'normal'} alt="CV summary education " onClick={() => toggleExpand(1)} />
                    <img src={HTML_2} className={expanded2 ? 'expanded' : 'normal'} alt="CV experience skill" onClick={() => toggleExpand(2)} />
                    <img src={HTML_1} className={expanded1 ? 'expanded' : 'normal'} alt="CV summary education" onClick={() => toggleExpand(1)} />
                    <img src={HTML_2} className={expanded2 ? 'expanded' : 'normal'} alt="CV experience skill" onClick={() => toggleExpand(2)} />
                </div>
                <div class="pic-container">
                    <img src={HTML_Icon} alt="Game 4" />
                </div>
            </div>
        </div>
    );
};

export default Web2;