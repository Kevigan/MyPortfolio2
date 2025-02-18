import React, { useState } from 'react';
import Tindog_1 from '../../../assets/images/tinedog1.jpg';
import Tindog_2 from '../../../assets/images/tinedog2.jpg';
import Tindog_3 from '../../../assets/images/tinedog3.jpg';
import Bootstrap_Icon from '../../../assets/images/bootstrap_Icon.png';

const Web3 = () => {
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
                <h1>Bootstrap</h1>
                <p>Starting page for a fake tinder app for dogs</p>
                <ul>
                    <li>Browser link: <a href="https://kevigan.github.io/BootstrapProject/" target="_blank" rel="noopener noreferrer"> Link</a></li>
                    <li>Github-Link: <a href="https://github.com/Kevigan/BootstrapProject.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Tindog_1} className={expanded1 ? 'expanded' : 'normal'} alt="greeting Dog picture on phone" onClick={() => toggleExpand(1)} />
                    <img src={Tindog_2} className={expanded2 ? 'expanded' : 'normal'} alt="adds" onClick={() => toggleExpand(2)} />
                    <img src={Tindog_3} className={expanded3 ? 'expanded' : 'normal'} alt="payment plan" onClick={() => toggleExpand(3)} />
                    <img src={Tindog_3} className={expanded3 ? 'expanded' : 'normal'} alt="payment plan" onClick={() => toggleExpand(3)} />
                </div>
                <div class="pic-container">
                    <img src={Bootstrap_Icon} alt="Game 4" />
                </div>
            </div>
        </div>
    );
};

export default Web3;