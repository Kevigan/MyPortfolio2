import React, { useState } from 'react';
import HTML_1 from '../../../assets/images/basicHTML.png';
import HTML_2 from '../../../assets/images/basicHTML2.png';

const Web2 = () => {
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
                <h1>HTML</h1>
                <p>Just some plain old HTML</p>
                <ul>
                    <li>Github-Link: </li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='twoCol'>
                    <img src={HTML_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={HTML_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Web2;