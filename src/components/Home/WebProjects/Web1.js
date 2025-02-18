import React, { useState } from 'react';
import Portfolio1 from '../../../assets/images/Portfolio1.jpg';
import Portfolio2 from '../../../assets/images/Portfolio2.jpg';
import Portfolio3 from '../../../assets/images/Portfolio3.jpg';
import Portfolio4 from '../../../assets/images/Reactsymbol.png';
import '../GameProjects/index.scss';

const Web1 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);

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
                <h1>Current Webpage</h1>
                <p>I made this web page using React. What it shows:</p>
                <ul>
                    <li>Some of the games i made.</li>
                    <li>Some of my web projects. </li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/MyPortfolio2.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Portfolio1} className={expanded1 ? 'expanded' : 'normal'} alt="Code 1" onClick={() => toggleExpand(1)} />
                    <img src={Portfolio2} className={expanded2 ? 'expanded' : 'normal'} alt="Code 2" onClick={() => toggleExpand(2)} />
                    <img src={Portfolio3} className={expanded3 ? 'expanded' : 'normal'} alt="Code 3" onClick={() => toggleExpand(3)} />
                    <img src={Portfolio4} className={expanded4 ? 'expanded' : 'normal'} alt="React logo" onClick={() => toggleExpand(4)} />
                </div>
                <div class="pic-container">
                    <img src={Portfolio4} alt="Game 4" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Web1;