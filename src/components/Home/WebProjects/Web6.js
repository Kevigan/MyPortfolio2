import React, { useState } from 'react';
import OwnAPI_1 from '../../../assets/images/OwnAPI_1.png';
import OwnAPI_2 from '../../../assets/images/OwnAPI_2.png';
import OwnAPI_3 from '../../../assets/images/OwnAPI_3.png';
import OwnAPI_4 from '../../../assets/images/OwnAPI_4.png';
import API_Icon from '../../../assets/images/API_Icon.png';

const Web6 = () => {
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
                <h1>Own API for blogs</h1>
                <p>Using</p>
                <ul>
                    <li>GET/POST/PUT/PATCH/DELETE</li>
                    <li>Github link: <a href="https://github.com/Kevigan/Own-Blog-API.git" target="_blank" rel="noopener noreferrer"> Link</a></li>
                </ul>
            </div>
            <div className='game-image-container'>
                <div className='image-grid'>
                    <img src={OwnAPI_1} className={expanded1 ? 'expanded' : 'normal'} alt="Game 1" onClick={() => toggleExpand(1)} />
                    <img src={OwnAPI_2} className={expanded2 ? 'expanded' : 'normal'} alt="Game 2" onClick={() => toggleExpand(2)} />
                    <img src={OwnAPI_3} className={expanded3 ? 'expanded' : 'normal'} alt="Game 3" onClick={() => toggleExpand(3)} />
                    <img src={OwnAPI_4} className={expanded4 ? 'expanded' : 'normal'} alt="Game 4" onClick={() => toggleExpand(4)} />
                </div>
                <div class="pic-container">
                    <img src={API_Icon}  alt="Game 4"  />
                </div>
            </div>
        </div>
    );
};

export default Web6;