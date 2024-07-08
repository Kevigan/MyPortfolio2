import React, { useState } from 'react';
import Portfolio1 from '../../../assets/images/Portfolio1.png';
import Portfolio2 from '../../../assets/images/Portfolio2.png';
import Portfolio3 from '../../../assets/images/Portfolio3.png';
import Portfolio4 from '../../../assets/images/Reactsymbol.png';

const Web1 = () => {
    const [expanded1, setExpandedImage1] = useState(false);
    const [expanded2, setExpandedImage2] = useState(false);
    const [expanded3, setExpandedImage3] = useState(false);
    const [expanded4, setExpandedImage4] = useState(false);

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
                <h1>Current Webpage</h1>
                <p>I made this web page using React. What it shows:</p>
                <ul>
                    <li>Some of the games i made.</li>
                    <li>Some of my web projects. </li>
                    <li>Github-Link: </li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={Portfolio1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={Portfolio2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={Portfolio3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={Portfolio4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    );
};

export default Web1;